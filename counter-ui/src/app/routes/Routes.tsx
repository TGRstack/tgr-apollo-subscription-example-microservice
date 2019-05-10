import * as React from 'react'
import { Redirect, Route, Switch, } from 'react-router-dom'
import HomePage from './Home'

export default function Routes() {
  return <Switch>
    {/* public routes */}
    <Route
      component={HomePage}
      // component={React.lazy(() => import('./Home'))}
      path={'/'}
      exact
    />
    {/* catch all other requests and redirect to Home */}
    <Redirect from="*" to={'/'} />
  </Switch>
}
