// TODO: move JSON to middleware

import { ApolloServer } from 'apollo-server-express'

import apolloConfig from './apolloConfig'

export default new ApolloServer(apolloConfig)
