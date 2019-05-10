import gql from 'graphql-tag'
import * as React from 'react'
import { Mutation, Subscription } from 'react-apollo'

interface IProps {}

const COUNTER_SUBSCRIPTION = gql`
subscription onCountIncr {
  count
}
`

const Counter = () => (
  <Subscription
    subscription={COUNTER_SUBSCRIPTION}
    // variables={{ repoFullName }}
  >
    {({ data, loading }) => {
      console.log({loading, data})
      return loading
        ? <h1>Loading ...</h1>
        : <h2>Counter: {data.count}</h2>
    }}
  </Subscription>
)

const COUNTER_MUTATION = gql`
mutation onCountIncr {
  countIncr
}
`
const CounterButton = () => (
  <Mutation mutation={COUNTER_MUTATION}>
    {(countIncr, { data }) => (
      <button onClick={e => countIncr()}>
        {data && data.countIncr
        ? `Increase Counter from ${data.countIncr}`
        : 'Increase Counter'}
      </button>
    )}
  </Mutation>
)

export default function HomePage(props: IProps): JSX.Element {
  return  <div>
    <Counter />
    <CounterButton />
  </div>
}
