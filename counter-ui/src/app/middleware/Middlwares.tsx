import * as React from 'react'

import { GQL_ENDPOINT } from '_config/index'
import Apollo from './apollo'
import Router from './router'

export default function Middlwares({ children }: {
  children: React.ReactChild
}) {
  // ROUTER must come before ALL OTHER middleware
  return <Router>
    <Apollo
      graphqlURL={GQL_ENDPOINT}
      // FIXME: use .env variable instead of hardcode!
      graphqlWS={'ws://0.0.0.0:3001/subscriptions'}
    >
      <>
        {children}
      </>
    </Apollo>
  </Router>
}
