import config from 'config'

const playgroundConfig = () => {
  // https://www.apollographql.com/docs/apollo-server/features/graphql-playground.html#Configuring-Playground
  const defaultQuery = `mutation increaseCounter {
  countIncr
}

query getCounter{
  count
}

subscription onCountIncr {
  count
}

query hiQry {hello}
mutation hiMut {hello}
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
          subscriptionEndpoint: config.GRAPHQL_WS || '/graphql',
        },
      ],
    }
  }
}

const result = playgroundConfig()
export default result
