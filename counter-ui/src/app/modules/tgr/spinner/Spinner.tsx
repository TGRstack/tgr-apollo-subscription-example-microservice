import classNames from 'classnames'
import * as React from 'react'
import * as S from './spinner.scss'

export default ({className, ...props}) => <div
  className={classNames(S.container, className)}
  {...props}
/>
