import Mutations, { MutationDefaults } from './Mutations'
import Queries from './Queries'
import Subscriptions from './Subscriptions'

const Resolvers = {
  Mutation: Mutations,
  Query: Queries,
  Subscription: Subscriptions,
}
export default Resolvers

console.log({Resolvers})

export const ResolverDefaults = {
  ...MutationDefaults,
}
