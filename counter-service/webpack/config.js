// ## opts for helpers
const {
  PORT = 3000,
  HOST_NAME = '0.0.0.0',
  NODE_ENV = 'dev',
  SSL: SSL_ENABLED,
} = process.env

const isSSL = !!SSL_ENABLED ? SSL_ENABLED.toLowerCase() === 'true' : false
const isProd = !(NODE_ENV.toLowerCase() === 'dev'|| NODE_ENV.toLowerCase() === 'development')

const path = require('path')
const paths = require('./paths')

// remember to update tsconfig and tslint.json
const alias =  {
  "config":       path.resolve(paths.src._, "config/"),
  "clients":      path.resolve(paths.src._, "clients/"),
  "collections":  path.resolve(paths.src._, "collections/"),
  "gql":          path.resolve(paths.src._, "gql/"),
  "modules":      path.resolve(paths.src._, "modules/"),
  "middleware":   path.resolve(paths.src._, "middleware/"),
  "service":      path.resolve(paths.src._, "service/"),
  "types":        path.resolve(paths.src._, "types/"),
  "utils":        path.resolve(paths.src._, "utils/"),
}

module.exports = {
  alias,
  isSSL,
  isProd,
}
