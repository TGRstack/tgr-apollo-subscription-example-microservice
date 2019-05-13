import { ApolloServerExpressConfig } from 'apollo-server-express'

import Resolvers from 'gql/Resolvers'
import Schema from 'gql/Schema'

import loggingConfig from './loggingConfig'
import playgroundConfig from './playgroundConfig'

const apolloConfig: ApolloServerExpressConfig = {
  // context: ({ req }) => {
  //   console.log("req:", req.user)
  //   return req.user
  // },
  resolvers: { ...Resolvers },
  typeDefs: Schema,
  ...playgroundConfig,
  ...loggingConfig,
}

export default apolloConfig
