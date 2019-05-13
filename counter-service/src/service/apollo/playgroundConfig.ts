import config from 'config'

const playgroundConfig = () => {
  // https://www.apollographql.com/docs/apollo-server/features/graphql-playground.html#Configuring-Playground
  const defaultQuery = `query hiQry {hello}
mutation hiMut {hello}

query getCounter{
  count
}

mutation increaseCounter {
  countIncr
}

subscription onCountIncr {
  count
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
          subscriptionEndpoint: config.GRAPHQL_WS || '/graphql',
        },
      ],
    }
  }
}

const result = playgroundConfig()
export default result
