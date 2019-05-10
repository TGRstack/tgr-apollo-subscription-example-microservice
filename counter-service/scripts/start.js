const { series, concurrent, } = require('nps-utils') // rimraf, setColors, 
// const { watch, } = require('./_helpers')
// const paths = require('./_paths.js')

const MAX_MEMORY_SIZE = 8192 // 8GB
const BUILD_DELAY=7

module.exports = {
  default: 'nps start.dev',
  // default: series.nps('start.dev.warmup', 'start.dev'),
  prod: 'nps start.server.prod',
  dev: {
    // warmup: 'bash export  & exit 0;',
    default: concurrent({
      watch: {
        script: 'nps start.dev.all',
        color:  'white.bold',
      },
      // open: {
      //   script: 'nps start.dev.browser',
      //   color:  'white.bold',
      // },
    }),
    all: concurrent({
      server: {
        script: 'nps start.server',
        color: 'green.bold',
      },
      // lint: {
      //   script: 'nps lint.watch',
      //   color: 'yellow.bold',
      // },
    }),
    browser: 'sleep '+BUILD_DELAY+' && nps open.web',
  },
  // server: 'ts-node -r tsconfig-paths/register src/',
  server: {
    default: concurrent({
      build: {
        script:  'nps build.watch',
        color: 'yellow.underline'
      },
      process: {
        script:  'nps start.server.dev',
        color: 'green.underline'
      }
    }),
    prod: 'node build/main.js',
    dev: `NODE_OPTIONS=--max_old_space_size=${MAX_MEMORY_SIZE} npx nodemon`,
  }
}
