const { concurrent, series, } = require('nps-utils') // rimraf, setColors

module.exports = {
  default: series.nps('build.scrub', 'start.dev'),
  dev: {
    description: "hot rebuild client, only rebuilds server once",
    default: series.nps('start.dev.warmup', 'start.dev.watch'),
    warmup: 'nps build.dev.server',       // NOTE: build the server once
    watch: concurrent({
      build: {
        script: 'nps build.watch.client', // NOTE: only watches the client
        color: 'white.bold',
      },
      server: {
        script: 'sleep 5 && nps server.start',
        color: 'magenta.bold',
      },
    })
    ,
  },
  devProd: {
    description: "hot rebuild client, only rebuilds server once",
    default: series.nps('start.devProd.warmup', 'start.devProd.watch'),
    warmup: 'nps build.prod.server',       // NOTE: build the server once
    watch: concurrent({
      build: {
        script: 'nps build.watchProd.client', // NOTE: only watches the client
        color: 'white.bold',
      },
      server: {
        script: 'sleep 5 && nps server.start',
        color: 'magenta.bold',
      },
    })
    ,
  },
  devl: concurrent({
    build: {
      script: 'nps build.watch',
      color: 'white.bold',
    },
    server: {
      script: 'sleep 5 && nps server.full',
      color: 'magenta.bold',
    },
    lint: {
      script: 'nps lint.watch',
      color: 'yellow.bold',
    },
  }),
  server: 'nps server',
  production: 'nps server.production',
}
