import config from 'config'

const playgroundConfig = () => {
  // https://www.apollographql.com/docs/apollo-server/features/graphql-playground.html#Configuring-Playground
  const defaultQuery = `
query {
  getAllHubs {
    dataPointsCount
    dataPointsRolledUpCount
    hubIds
    tripIds
    hubIdsByTrip {
      hubIds
      tripId
    }
    # playtrackByTrip {
    #   summary {
    #     hubId, hubName, tripId
    #   }
    #   summaryByTrip {
    #     IR100 {
    #       hubs {hubId, hubName}
    #       framesAmount
    #       minTimeutc
    #       maxTimeutc
    #     }
    #   }
    #   IR100 {
    #     mapMarkers
    #     mapPolylines
    #     slider
    #     kpiBearing
    #     kpiSpeed
    #     kpiTemperature
    #     speed
    #     temperature
    #     vibrationLog
    #   }
    # }
  }
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
