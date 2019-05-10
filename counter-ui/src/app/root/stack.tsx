import * as React from 'react'

import Middlewares from '../middleware'
import Appliance from './appliance'
import Loading from './loading'

const Stack = () => (
  <React.StrictMode>
    <Middlewares>
      <Loading>
        <Appliance />
      </Loading>
    </Middlewares>
  </React.StrictMode>
)
export default Stack
