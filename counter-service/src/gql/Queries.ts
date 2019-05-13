// Provide resolver functions for your schema fields

import Counter from './counter/Counter'

const Queries = {
  count: () => Counter.value,
  hello: () => 'Hello Query!',
}

export default Queries
