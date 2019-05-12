import { Subscriptions as CountSubs } from './counter'

// import hubs from './hubs'

// Provide resolver functions for your schema fields
const Subscriptions = {
  ...CountSubs,
}

export default Subscriptions
