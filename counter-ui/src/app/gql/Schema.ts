import gql from 'graphql-tag'

// Construct a schema, using GraphQL schema language
const Schema = gql`
  extend type Query {
    hello: String
  }
`
export default Schema

// extend type Query {
//   hello: String
//   getSelectedHubId: String
//   tmp: TMP
// }
// extend type TMP {
//   selectedHubId: String
//   hubs: [Hub]
// }

// extend type Hub {
//   hubId: String
//   hubFullName: String
//   hubShortName: String
// }

// extend type Mutation {
//   selectHub(id: String): String
//   # selectHub(id: String): Hub
// }
