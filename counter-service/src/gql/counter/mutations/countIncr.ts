// tslint:disable no-any
const { PubSub } = require('apollo-server')
const pubsub = new PubSub()

import Channel from '../Channel'
import { Counter as CounterMaker } from '../Counter'

const Counter = new CounterMaker()

async function countIncr(root: any, args: any, context: any) {
  const count = Counter.increment()
  await pubsub.publish('countIncr', { count })
  // await pubsub.publish(Channel, { count })
  console.log(Channel, '>>>', { count })
  return count
  // return 'countIncr'
}
// console.log({ countIncr })

export default countIncr
