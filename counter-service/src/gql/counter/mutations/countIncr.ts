// tslint:disable no-any
import { pubsub } from 'service/apollo'

import Counter from '../Counter'

async function countIncr(root: any, args: any, context: any) {
  const count = Counter.increment()
  console.log({Counter})
  await pubsub.publish('countIncr', { count })
  console.log('countIncr', '>>>', { count })
  return count
}

export default countIncr
