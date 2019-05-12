const { concurrent, series } = require('nps-utils')

module.exports = {
  scripts: {
    default: 'nps start',
    start:  concurrent({
      FE: {
        script: 'cd counter-ui && nps ',
        color: 'blue.bold',
      },
      BE: {
        script: 'cd counter-service && nps ',
        color: 'green.bold',
      },
    }),
    setup:  {
      default: concurrent({
        FE: {
          script: 'nps setup.FE',
          color: 'blue.bold',
        },
        BE: {
          script: 'nps setup.BE',
          color: 'green.bold',
        },
      }),
      FE: {
        default: series.nps('setup.FE.npm', 'setup.FE.env'),
        npm:'cd counter-ui && npm i -D',
        env: 'cd counter-ui && cp .env.example .env.development',
      },
      BE: {
        default: series.nps('setup.BE.npm', 'setup.BE.env'),
        npm:'cd counter-service && npm i -D',
        env: 'cd counter-service && cp .env.example .env.development',
      },
    },
    test: 'echo "Error: no test specified" && exit 1',
  }
};
