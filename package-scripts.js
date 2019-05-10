const { concurrent } = require('nps-utils')

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
    setup:  concurrent({
      FE: {
        script: 'cd counter-ui && npm i -D',
        color: 'blue.bold',
      },
      BE: {
        script: 'cd counter-service && npm i -D',
        color: 'green.bold',
      },
    }),
    test: 'echo "Error: no test specified" && exit 1',
  }
};
