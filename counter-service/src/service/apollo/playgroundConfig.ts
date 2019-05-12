import config from 'config'

const playgroundConfig = () => {
  // https://www.apollographql.com/docs/apollo-server/features/graphql-playground.html#Configuring-Playground
  const defaultQuery = `
subscription counterStream {
  count
}
mutation increaseCounter {
  countIncr
}
`
  return {
    playground: {
      // settings: {
      //   'editor.theme': 'light',
      // },
      responses: ['{}'],
      tabs: [
        {
          endpoint: config.GRAPHQL_EXPLORE || '/graphql',
          query: defaultQuery,
          subscriptionEndpoint: config.GRAPHQL_WS || '/subscriptions',
        },
      ],
    }
  }
}

const result = playgroundConfig()
export default result
