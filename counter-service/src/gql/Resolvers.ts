// import Mutations from './Mutations'
import Mutations, { MutationDefaults } from './Mutations'
import Queries from './Queries'
import Subscriptions from './Subscriptions'

export const Resolvers = {
  Mutation: Mutations,
  Query: Queries,
  Subscription: Subscriptions,
}
export default Resolvers

export const ResolverDefaults = {
  ...MutationDefaults,
}
