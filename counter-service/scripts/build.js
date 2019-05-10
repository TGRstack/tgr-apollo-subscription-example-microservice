const { series, } = require('nps-utils') // rimraf, concurrent, setColors
const { watch, } = require('./_helpers')
const paths = require('./_paths.js')

const PREAMBLE = ['commit.pre',]
const PREAMBLE2 = ['scrub.build',]

module.exports = {
  description: 'Remove the previous build and run the compiler',
  default: series.nps(...PREAMBLE, 'build.dev'),
  watch: watch(paths.watch.server, 'nps build.dev'),
  dev: {
    default: series.nps(...PREAMBLE2, 'build.dev.build'),
    build: 'npx webpack --config '+paths.wp.server.dev,
  },  
  prod: {
    default: series.nps(...PREAMBLE, ...PREAMBLE2, 'build.prod.server'),
    server: 'npx webpack --config '+paths.wp.server.prod,
  },
}
