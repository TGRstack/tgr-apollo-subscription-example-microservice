// global helmet settings
import * as React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'

export default function Helmet() {
  return <ReactHelmet>
    <title>Counter Example | TGRstack</title>
    <link rel="canonical" href="tgrstack.com" />
    <meta name="description" content="Counter Example for TGRstack" />
  </ReactHelmet>
}
