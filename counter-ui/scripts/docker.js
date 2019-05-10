const { series } = require(`nps-utils`) // concurrent, setColors

const GCP_ID = 'someid'
const NAME = `counter-ui`
const NAME_PROD = `gcr.io/${GCP_ID}/${NAME}`
// staging - release ==  production - release
const VERSION = '0.0.34'

module.exports = {
  vars: {
    NAME_PROD, VERSION,
  },
  default: series.nps(`docker.build`, `docker.restart`),
  build: {
    default: `nps docker.build.staging`,
    staging: `docker build --rm -f "Dockerfile.staging" -t ${NAME}:staging .`,
    prevStaging: `docker build --rm -f "Dockerfile.staging-previousWeek" -t ${NAME}:stagingPrev .`,
    production: `docker build --rm -f "Dockerfile.prod" -t ${NAME_PROD}:${VERSION} -t ${NAME_PROD}:latest .`,
    // production: `docker build --no-cache --rm -f "Dockerfile.prod" -t ${NAME_PROD}:latest .`,
  },
  restart: {
    default: `nps docker.restart.staging`,
    staging: series.nps(`docker.kill.staging`, `docker.start.staging`),
    prevStaging: series.nps(`docker.kill.prevStaging`, `docker.start.prevStaging`),
  },
  start: {
    default: `nps docker.start.staging`,
    staging: `docker run --restart unless-stopped -d --name ${NAME} -p 80:80/tcp ${NAME}:staging`,
    prevStaging: `docker run --restart unless-stopped -d --name ${NAME}-prev -p 4000:80/tcp ${NAME}:stagingPrev`,
  },
  kill: {
    staging: `docker kill ${NAME}; docker rm ${NAME}`,
    prevStaging: `docker kill ${NAME}-prev; docker rm ${NAME}-prev`,
  }
}