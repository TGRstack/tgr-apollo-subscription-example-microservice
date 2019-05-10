const { series, } = require('nps-utils') // rimraf concurrent, setColors
const docker = require('./docker.js')
const git = require('./git.js')

// default: series.nps('publish.docker', 'publish.git'),
module.exports = {
  default: 'nps publish.docker',
  docker: {
    default: series.nps('docker.build.production', 'publish.docker.publish'),
    publish: `docker push ${docker.vars.NAME_PROD}:${docker.vars.VERSION}`,
  },
  git: git.tags.push,
}

