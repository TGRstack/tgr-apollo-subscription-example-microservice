// tslint:disable no-any
import { pubsub } from 'service/apollo'

// import Channel from '../Channel'
import { Counter as CounterMaker } from '../Counter'

const Counter = new CounterMaker()

async function countIncr(root: any, args: any, context: any) {
  const count = Counter.increment()
  await pubsub.publish('countIncr', { count })
  // await pubsub.publish(Channel, { count })
  console.log('countIncr', '>>>', { count })
  return count
}

export default countIncr
