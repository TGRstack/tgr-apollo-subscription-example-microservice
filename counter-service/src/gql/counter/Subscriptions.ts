import { pubsub } from 'service/apollo'

// import Channel from './Channel'

const count = {
  resolve: data => {
    console.log('CounterSub>', {data})
    return data
  },
  subscribe: () => pubsub.asyncIterator(['countIncr'])
  // subscribe: () => pubsub.asyncIterator([Channel])
}

const CounterSubscriptions = {
  count
}

export default CounterSubscriptions