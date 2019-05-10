import {
  Theme,
} from '@material-ui/core'
import {
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/styles'
import { ErrorBoundary } from '_modules/tgr/'
import { ReactChildren } from '_modules/types/common'
import WindowLoading from '_root/loading'
import * as React from 'react'

const styles = (theme: Theme) => createStyles({ // tslint:disable-line no-any
  root: {
    display: 'flex'
  },

  main: {
    width: '100%',
  }
})

interface IStandardPage extends WithStyles<typeof styles> {
  children: ReactChildren
}

function StandardPage(props: IStandardPage) {
  const {children, classes} = props

  return <div className={classes.root}>
    <main className={classes.main}>
      <WindowLoading>
        <ErrorBoundary>
          <>
            {children}
          </>
        </ErrorBoundary>
      </WindowLoading>
    </main>
  </div>
}

export default withStyles(styles)(StandardPage)
