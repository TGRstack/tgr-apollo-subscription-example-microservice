import { Mutations as CounterMutations } from './counter'

// console.log({CounterMutations})

const Mutations = {
  hello: () => 'hi',
  ...CounterMutations,
}

// console.log({Mutations})

export default Mutations

export const MutationDefaults = {
  count: 0,
}

// export const MutationDefaults = {
//   authorization: {
//     __typename: 'Authorization',
//     isAuthed: false,
//   },
//   networkStatus: {
//     __typename: 'NetworkStatus',
//     isConnected: false,
//   },
// }

// export default {
  // authLogin: (_, { username, password }, { cache }) => {
  //   const isAuthed = username.length > 0  && password.length > 0
  //   const data = {
  //     authorization: {
  //       __typename: 'Authorization',
  //       isAuthed,
  //       password,
  //       username,
  //     },
  //   }
  //   cache.writeData({ data })
  //   return null
  // },
  // updateNetworkStatus: (_, { isConnected }, { cache }) => {
  //   const data = {
  //     networkStatus: {
  //       __typename: 'NetworkStatus',
  //       isConnected
  //     },
  //   }
  //   cache.writeData({ data })
  //   return null
  // },
// }
