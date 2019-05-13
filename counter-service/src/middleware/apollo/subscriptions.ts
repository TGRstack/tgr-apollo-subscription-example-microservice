import { GRAPHQL_WS } from 'config/environment'
import { Schema } from 'gql/index'
import { execute, subscribe } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import { Server } from 'http'
import logger from 'modules/logger'
import { SubscriptionServer } from 'subscriptions-transport-ws'

const services = {
  execute,
  // schema: Schema,
  schema: makeExecutableSchema({typeDefs: Schema}),
  subscribe,
  onConnect: (connectionParams, webSocket, context) => {
    logger.info('SOCK | HELLO')
  },
  onDisconnect: (webSocket, context) => {
    logger.info('SOCK | GOODBYE')
  },
  onOperation: (message, params, webSocket) => {
    logger.info('SOCK | PROCESS START')
    return params
  },
  onOperationComplete: webSocket => {
    logger.info('SOCK | PROCESS DONE')
  },
}

const config = (server: Server) => ({
  path: GRAPHQL_WS,
  server,
})

export default function subscriptions(server: Server) {
  return new SubscriptionServer(services, config(server))
}
