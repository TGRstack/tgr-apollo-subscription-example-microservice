import * as React from 'react'

// TODO: replace style w/ classNAme
const LimitedSpan = ({ children, limit = 50 }) => <span style={{
  maxWidth: `${limit}ch`,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}}>
  {children}
</span>
export default LimitedSpan
