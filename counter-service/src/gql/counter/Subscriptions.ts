import pubsub from 'service/apollo/pubsub'

const count = {
  resolve: data => {
    console.log('CounterSub>', {data})
    return data
  },
  subscribe: () => pubsub.asyncIterator(['countIncr'])
}

const CounterSubscriptions = {
  count
}

export default CounterSubscriptions
