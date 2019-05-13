
// tslint:disable no-any
import pubsub from 'service/apollo/pubsub'

import Counter from './counter/Counter'

async function countIncr(root, args, context) {
  const count = Counter.increment()
  await pubsub.publish('countIncr', count)
  console.log('countIncr', '>>>', { count })
  return count
}

const Mutations = {
  countIncr,
  hello: () => 'Hello Mutation!',
}

export const MutationDefaults = {
  // count: 0,
}

export default Mutations
