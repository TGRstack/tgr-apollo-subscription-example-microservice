import * as express from 'express'
import * as fs from 'fs'
import * as http from 'http'
import * as https from 'https'
import Logger from 'modules/logger'
import ApolloServer from './apollo/apollo'

import { SUCCESS_MESSAGE } from './helpers'

export default class Express {
  app: express.Express
  config: any                     // tslint:disable-line no-any
  server: any                     // tslint:disable-line no-any
  serverConfig: any[]             // tslint:disable-line no-any
  successMessage: string
  middleware: any                 // tslint:disable-line no-any

  constructor({
    config,
    middleware,
  }: {
    config: any, middleware: any, // tslint:disable-line no-any
  }) {
    this.app = express()
    this.config = config
    this.server = config.SSL ? https : http
    this.serverConfig = []
    this.middleware = middleware
    this.successMessage = SUCCESS_MESSAGE(config)

    this.setup()
  }

  setup() {
    const {app, config, middleware, } = this

    this.serverConfig = this.setupConfig()

    // Express
    middleware.expressInfo(app)
    middleware.expressSecurity(app)
    middleware.expressLogger(app)

    // Apollo
    ApolloServer.applyMiddleware({
      app,
      path: config.GRAPHQL_REST,
    })
  }
  setupConfig() {
    const {app, config: {SSL, SSL_KEY, SSL_CRT}} = this

    const sslConfig = (() => {
      const res: {key?: Buffer, cert?: Buffer} = {}
      if (SSL) {
        res.key = fs.readFileSync(SSL_KEY)
        res.cert = fs.readFileSync(SSL_CRT)
      }

      return res
    })()

    return [sslConfig, app].filter(el =>
      typeof el !== 'object'
      || Array.isArray(el)
      || Object.keys(el).length > 0
    )
  }

  start() {
    const {
      config,
      middleware,
      server,
      serverConfig,
    } = this

    // Create a http/ws listener for our express app.
    const ws: http.Server = server.createServer(...serverConfig)
    const listener = ws.listen({port: config.PORT}, () => {
      middleware.apolloSubscriptions(ws)

      // tslint:disable-next-line no-console
      Logger.info(this.successMessage)
    })
    return listener
  }
}
