import { ReactChildren } from '_modules/types/common'
import * as React from 'react'
import {
  Route,
  withRouter,
} from 'react-router-dom'

export const makePrivateRoute = ({
  loggedIn,
  loginCallback,
  fallbackPath,
}: {
  loggedIn?: string,
  loginCallback?: () => void,
  fallbackPath: string,
}) => {
  const PrivateRouteElm = ({
    component: Component,
    children,
    exact = false,
    history,
    path,
    ...props
  }: {
    component: React.ComponentType<any>, // tslint:disable-line no-any
    children?: ReactChildren,
    exact?: boolean,
    history: any,  // tslint:disable-line no-any // FIXME: History.Location<S>,
    path: string,
  }) => {
    const signedIn = loggedIn || loginCallback && loginCallback()

    // console.log({props})
    // console.log({signedIn, loggedIn})

    // FIXME: add webpack chunk point to prevent the entire app being downloaded w/o login
    if (signedIn && children) {
      return <Route
        exact={exact}
        path={path}
        render={(...p2) => <Component {...p2} {...props}>{children}</Component>}
      />
    }
    if (signedIn) {
      return <Route exact={exact} path={path} render={(...p2) => <Component {...p2} {...props} />} />
    }
    // tslint:disable-next-line no-console
    console.info(`[Router] LoggedOut users cannot access "${history.location.pathname}"`)
    history.push(fallbackPath)
    return null
  }

  return withRouter((PrivateRouteElm as any)) // tslint:disable-line no-any
}

// const PrivateRouteFull = ({
//   component: Component,
//   exact = false,
//   history,
//   path,
//   loggedIn,
//   fallbackPath,
//   ...props
// }: {
//   component: React.ComponentType<any>, // tslint:disable-line no-any
//   exact?: boolean,
//   history: any,  // tslint:disable-line no-any // FIXME: History.Location<S>,
//   path: string,
//   loggedIn: boolean,
//   fallbackPath: string,
// }) => {
//   if (loggedIn) {
//     return <Route exact={exact} path={path} render={(...p2) => <Component {...p2} {...props}  />} />
//   }
//   // tslint:disable-next-line no-console
//   console.info(`[Router] LoggedOut users cannot access "${history.location.pathname}"`)
//   history.push(fallbackPath)
//   return null
// }
// export const PrivateRoute = withRouter((PrivateRouteFull as any)) // tslint:disable-line no-any
