import { GRAPHQL_WS } from 'config/environment'
import { Schema } from 'gql/index'
import { execute, subscribe } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import { Server } from 'http'
import logger from 'modules/logger'
import { SubscriptionServer } from 'subscriptions-transport-ws'

const schema = makeExecutableSchema({typeDefs: Schema})

const onStateChange = {
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

const gqlFunctions = {
  execute,
  subscribe,
}

const options = {
  schema,
  ...onStateChange
}

const socketOptions = (server: Server) => ({
  path: GRAPHQL_WS,
  server,
})

export default function subscriptions(server: Server): SubscriptionServer {
  return new SubscriptionServer({...gqlFunctions, ...options}, socketOptions(server))
}
