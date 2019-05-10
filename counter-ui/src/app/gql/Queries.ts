// Provide resolver functions for your schema fields
import gql from 'graphql-tag'
const Queries = {
  hello: () => 'Hello world!',
}

export default Queries

// getSelectedHubId: (_, {cache}) => {
//   console.log({arguments})
//   // return 'test'
//   const query = gql`
//     query getSelectedHubIdQuery {
//       tmp {
//         selectedHubId
//       }
//     }
//   `
//   return cache.readQuery({ query })
// }
