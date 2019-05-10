import { gql } from 'apollo-server-express'

// Construct a schema, using GraphQL schema language
const Query = gql`
  scalar JSON
  scalar JSONObject

  type Query {
    hello: String
  }
`

const Mutation =  gql`
  type Mutation {
    countIncr: Float
    hello: String
  }
`

const Subscription = gql`
  type Subscription {
    count: Float
  }
`

const Schema = [
  Query,
  Mutation,
  Subscription,
]
export default Schema
