import * as React from 'react'

import Spinner from '_modules/tgr/spinner'

const WindowLoading = ({children}: {children: React.ReactChild}) => <React.Suspense fallback={<Spinner />} >
  {children}
</React.Suspense>

export default WindowLoading
