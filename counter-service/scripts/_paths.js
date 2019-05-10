const path = require('path');

const rootPath = path.resolve(__dirname, '..')
const SERVER = ''

const watchPaths = (() => {
  const P = 'src/'
  const S = P+SERVER+''
  const W = 'webpack/'
  const X = '**/'

  const commonPaths = [
    '.env',
    '.env.development',
    // NOTE: this file and other shared
    'scripts/_*.js',
    'tslint.json',
    'tsconfig.json',
    'package.json',
    P+'types/*',
    P+'types/'+X+'*',
    P+'types/'+X+X+'*',
    P+'helpers/*',
    P+'helpers/'+X+'*',
    P+'helpers/'+X+X+'*',
    W+'*.common.js',
    W+'paths.js',
    W+'config.js',
  ]

  return Object.assign({}, {
    // chokidar doesn't run unless that level of the heirarchy is called...
    server: [
      S+'*.ts',
      S+X+'*.ts',
      S+X+X+'*.ts',
      S+X+X+X+'*.ts',
      S+X+X+X+X+'*.ts',
      S+X+X+X+X+X+'*.ts',
      W+'*.server.js',
      W+X+'*.server.js',
      W+X+X+'*.server.js',
      ...commonPaths
    ].join(' '),
  })
})()


const wpPaths = (() => {
  const _wpPath = path.resolve(rootPath, 'webpack')
  function mkWp() {
    return path.join(_wpPath, ...Object.values(arguments))
  }

  return {
    server: {
      dev: mkWp('webpack.dev.server.js'),
      prod: mkWp('webpack.prod.server.js'),
    }
  }
})()
function mkWp() {
  return path.join(wpPath, ...Object.values(arguments))
}

module.exports = {
  rootPath,
  wp: wpPaths,
  watch: watchPaths,
}
