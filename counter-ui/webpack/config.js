// DOC: load .env.development
require('dotenv')
  .config({
    path: `${process.cwd()}/.env.development`
  })

const path = require('path')
const paths = require('./paths')

// ## opts for helpers
const {
  PORT = 3000,
  HOST_NAME = '0.0.0.0',
  NODE_ENV = 'dev',
  SSL: SSL_ENABLED,
} = process.env

const isSSL = !!SSL_ENABLED ? SSL_ENABLED.toLowerCase() === 'true' : false
const isProd = !(NODE_ENV.toLowerCase() === 'dev'|| NODE_ENV.toLowerCase() === 'development')
const HOST_PATH = `http${isSSL ? 's' : ''}://${HOST_NAME}:${PORT}/`

const htmlPluginOptions = {
  template: paths.src.app.client,
  filename: 'index.html',
  appMountId: 'react-root',
  inject: true,
  base: HOST_NAME,
}

// remember to update tsconfig and tslint.json
const alias =  {
  "!server":      paths.src.server._,
  "!app":         paths.src.app._,

  // implicitely app modules
  "_assets":      path.resolve(paths.src.app._, "assets/"),
  "_config":      path.resolve(paths.src.app._, "config/"),
  "_components":  path.resolve(paths.src.app._, "components/"),
  "_gql":         path.resolve(paths.src.app._, "gql/"),
  "_middleware":  path.resolve(paths.src.app._, "middleware/"),
  "_modules":     path.resolve(paths.src.app._, "modules/"),
  "_root":        path.resolve(paths.src.app._, "root/"),
  "_routes":      path.resolve(paths.src.app._, "routes/"),
  "_types":       path.resolve(paths.src.app._, "types/"),
  "_utils":       path.resolve(paths.src.app._, "utils/"),
}

const bulkyModules = [
  "@material-ui/core",
  "@material-ui/icons",
  "@material-ui/styles",
  "apollo-client",
  "apollo-utilities",
  "axios",
  "cors",
  "deck.gl",
  "graphql",
  "react-apollo",
  "react-dom",
  "react-mapbox-gl",
  "react-router-dom",
  "react-sizeme",
  "react-timeago",
  "react-vis",
  "react",
  "recharts",
]

module.exports = {
  alias,
  bulkyModules,
  HOST_PATH,
  htmlPluginOptions,
  isSSL,
  isProd,
}
