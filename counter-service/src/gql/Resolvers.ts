import { PubSub } from 'apollo-server'
const pubsub = new PubSub()

import Counter from './Counter'

async function countIncr(root, args, context) {
  const count = Counter.increment()
  await pubsub.publish('countIncr', {count})
  console.log('countIncr', '>>>', { count })
  return count
}

const Resolvers = {
  Mutation: {
    countIncr,
    hello: () => 'Hello Mutation!',
  },
  Query: {
    count: () => Counter.value,
    hello: () => 'Hello Query!',
  },
  Subscription: {
    count: {
      subscribe: () => pubsub.asyncIterator(['countIncr'])
    }
  },
}
export default Resolvers

console.log({Resolvers})

export const ResolverDefaults = {
  count: 0,
}

// import Mutations, { MutationDefaults } from './Mutations'
// import Queries from './Queries'
// import Subscriptions from './Subscriptions'

// const Resolvers = {
//   Mutation: Mutations,
//   Query: Queries,
//   Subscription: Subscriptions,
// }
// export default Resolvers

// console.log({Resolvers})

// export const ResolverDefaults = {
//   ...MutationDefaults,
// }
