// import * as express from 'express'
// import * as actuator from 'express-actuator'
// import { SERVICE_INFO } from '../../config/'

// export default function logger(app: express.Application) {

import { GRAPHQL_WS } from 'config/environment'
import { Schema } from 'gql/index'
import { execute, subscribe } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import { Server } from 'http'
import logger from 'modules/logger'
import { SubscriptionServer } from 'subscriptions-transport-ws'

const services = {
  execute,
  schema: makeExecutableSchema({typeDefs: Schema}),
  subscribe,
  onConnect: (connectionParams, webSocket, context) => {
    logger.info('HELLO')
  },
  onDisconnect: (webSocket, context) => {
    logger.info('GOODBYE')
  },
  // onOperation: (message, params, webSocket) => {
  //   // Manipulate and return the params, e.g.
  //   params.context.randomId = uuid.v4();

  //   // Or specify a schema override
  //   if (shouldOverrideSchema()) {
  //     params.schema = newSchema;
  //   }

  //   return params;
  // },
  // onOperationComplete: webSocket => {
  //   // ...
  // },
}

const config = (server: Server) => ({
  path: GRAPHQL_WS,
  server,
})

export default function subscriptions(server: Server) {
  return new SubscriptionServer(services, config(server))
}
