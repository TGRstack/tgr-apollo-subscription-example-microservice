const { PubSub } = require('apollo-server')
const pubsub = new PubSub()

import { COUNT_INCR } from './pubsub_channels'

// import hubs from './hubs'

// Provide resolver functions for your schema fields
const Subscriptions = {
  count: {
    resolve: data => {
      console.log({data})
      return data
    },
    subscribe: () => pubsub.asyncIterator(['countIncr'])
    // subscribe: () => pubsub.asyncIterator([COUNT_INCR])
  },
  // ...hubs.query,
}

export default Subscriptions
