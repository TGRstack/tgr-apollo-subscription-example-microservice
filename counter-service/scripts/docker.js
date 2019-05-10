const { series } = require(`nps-utils`) // concurrent, setColors

const GCP_ID = 'someid'
const NAME = `gql-gateway`
const NAME_PROD = `gcr.io/${GCP_ID}/${NAME}`
// staging - release ==  production - release
const VERSION = '0.0.1'

module.exports = {
  vars: {
    NAME_PROD, VERSION
  },
  default: series.nps(`docker.build`, `docker.restart`),
  develop: {
    default: 'echo "no default docker.develop, did you mean docker.develop.prod" && exit 0;',
    prod: series.nps(`docker.build.prod`, `docker.restart.prod`),
  },
  build: {
    default: `nps docker.build.staging`,
    staging: `docker build --rm -f "Dockerfile.staging" -t ${NAME}:staging .`,
    production: `docker build --rm -f "Dockerfile.prod" -t ${NAME_PROD}:${VERSION} -t ${NAME_PROD}:latest .`,
  },
  restart: {
    default: `nps docker.restart.staging`,
    staging: series.nps(`docker.kill.staging`, `docker.start.staging`),
    prod: series.nps(`docker.kill.prod`, `docker.start.prod`),
  },
  start: {
    default: `nps docker.start.staging`,
    staging: `docker run --restart unless-stopped -d --name ${NAME} -p 81:80/tcp ${NAME}:staging`,
    prod: `docker run --restart unless-stopped -d --name ${NAME} -p 81:80/tcp ${NAME_PROD}:latest`,
  },
  kill: {
    staging: `docker kill ${NAME}; docker rm ${NAME}`,
    prod: `docker kill ${NAME}; docker rm ${NAME}`,
  }
}