import { ApolloServerExpressConfig } from 'apollo-server-express'
import { Schema } from 'gql/index'
import Resolvers from 'gql/Resolvers'
import loggingConfig from './loggingConfig'
import playgroundConfig from './playgroundConfig'
import resolveFunctions from './resolveFunctions'

const apolloConfig: ApolloServerExpressConfig = {
  // context: ({ req }) => {
  //   console.log("req:", req.user)
  //   return req.user
  // },
  resolvers: { ...Resolvers, ...resolveFunctions },
  typeDefs: Schema,
  ...playgroundConfig,
  ...loggingConfig,
}

console.log({Resolvers, resolveFunctions, apolloConfig})

export default apolloConfig
