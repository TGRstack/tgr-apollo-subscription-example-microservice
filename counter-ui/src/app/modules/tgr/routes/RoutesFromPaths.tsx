// import * as React from 'react'
// interface IPath {
//   alt?: string,
//   _: string,
//   c: any, // tslint:disable-line no-any
// }

// export default function RoutesFromPaths({
//   paths,
//   Route,
//   Redirect,
// }: {
//   paths: IPath[],
//   Route: React.ComponentClass<any>,    // tslint:disable-line no-any
//   Redirect: React.ComponentClass<any>, // tslint:disable-line no-any
// }) {
//   return paths.map((o: IPath) => {
//     if (!o.alt) {
//       return <Route exact path={o._} component={o.c} />
//     } else {
//       return <Redirect from={o.alt} to={o._} />
//     }
//   })
// }
