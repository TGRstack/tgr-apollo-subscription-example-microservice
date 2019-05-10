// https://dev.to/sarah_chima/error-boundaries-in-react-3eib
import * as React from 'react'

const styles  = {
  h1: {
    fontSize: 24,
    margin: '24px 4px',
  },
  h2: {
    fontSize: 20,
    margin: '16px 4px',
  },
  p: {
    fontSize: 16,
    lineHeight: 2,
    margin: '6px 8px',
  }
}
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.state = {
      hasError : false,
      error    : null,
      info     : null
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError : true,
      error,
      info
    })
  }

  render() {
    const {hasError, info, error} = this.state

    if (hasError) {
      const errorMessage = error.toString()
      const errorLocation = info.componentStack.toString()
      return (
        <div key={this.props.key || 0}>
          <h1 style={styles.h1}>Uh oh... the Application Crashed</h1>
          <h2 style={styles.h2}>Error Message</h2>
          <br />
          <p style={styles.p}>{errorMessage}</p>
          <br />
          <hr />
          <h2 style={styles.h2}>Error Location</h2>
          <p style={styles.p}>{errorLocation}</p>
        </div>
        )
    } else {
      return this.props.children
    }
  }
}
