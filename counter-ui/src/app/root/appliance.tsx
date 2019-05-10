import { CssBaseline } from '@material-ui/core'
import * as React from 'react'

import Routes from '../routes'
import Helmet from './helmet'

import './global.scss'
import './reset.css'
// import './fonts'

export default function Appliance() {
  // theme provider HAS ONLY ONE CHILD
  return <>
    <CssBaseline />
    <Helmet />
    <Routes />
  </>
}
