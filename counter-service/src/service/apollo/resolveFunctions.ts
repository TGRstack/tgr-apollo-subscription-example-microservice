import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json'

const resolveFunctions = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
}
export default resolveFunctions
