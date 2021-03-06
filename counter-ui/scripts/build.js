// FIXME: replace references to client w/ app, Line 13 is supposed to be what?

const { series, concurrent, rimraf,} = require('nps-utils') //  setColors
const {
  mkNewDirectory,
  watch,
} = require('./_helpers')
const _paths = require('./_paths.js')

const concurrentBuild = type => { // dev or prod or watch
  const client = (() => {
    const obj = {}
    const name = type === 'watch' ? 'app' : 'client'
    obj[name] = {
      script: 'nps build.'+type+'.client',
      color: 'green.bold',
    }
    return obj
  })()

  const server = {
    script: 'nps build.'+type+'.server',
    color: 'blue.bold',
  }

  const options = {
    default: concurrent({
      ...client,
      server,
    }),
  }

  return options
}

const setupAssets = (()=> {
  const assetsPath = type => {
    const path = type === 'server'
      ? _paths.src.app.assets
      : _paths.src.server.assets

    return mkNewDirectory(path)
      ? 'mkdir -p '+path
      : 'echo "'+type+'/assets directory exists"'
  }

  return {
    default: concurrent.nps('build.setup.assets.app', 'build.setup.assets.server'),
    app: assetsPath('app'),
    server: assetsPath('server'),
  }
})()

const build = {
  description: 'Remove the previous build and run the compiler',
  default: 'nps build.development',
  scrub: {
    default: rimraf('build/'),
    client: rimraf('build/app'),
    server: rimraf('build/server'),
  },
  development: {
    default: series.nps('commit.pre','build.development.multi'),
    client: series('nps build.scrub.client', 'NODE_ENV=DEV npx webpack --config '+_paths.wp.client.dev),
    server: series('nps build.scrub.server', 'NODE_ENV=DEV npx webpack --config '+_paths.wp.server.dev),
    multi: concurrentBuild('development'),
  },
  production: {
    default: series.nps('commit.pre', 'scrub.build', 'build.production.multi'),
    client: series('nps build.scrub.client', 'NODE_ENV=PRODUCTION npx webpack --config '+_paths.wp.client.prod),
    server: series('nps build.scrub.server', 'NODE_ENV=PRODUCTION npx webpack --config '+_paths.wp.server.prod),
    multi: concurrentBuild('production'),
  },
  watch: {
    default: concurrentBuild('watch'),
    client: watch(_paths.watch.client, 'nps build.development.client'),
    server: watch(_paths.watch.server, 'nps build.development.server'),
  },
  watchProd: {
    // default: concurrentBuild('watchProd'),
    client: watch(_paths.watch.client, 'nps build.production.client'),
    // server: watch(_paths.watch.server, 'nps build.development.server'),
  },
  setup: {
    default: 'nps build.setup.assets',
    assets: setupAssets,
  },
}

module.exports = build
