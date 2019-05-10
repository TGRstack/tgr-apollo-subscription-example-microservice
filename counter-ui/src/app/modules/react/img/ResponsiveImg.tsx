import {
  Theme,
} from '@material-ui/core'
import {
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/styles'
import * as React from 'react'
import { IImageElm } from './imageTypes'
import Img from './Img'

const styles = (theme: Theme) => createStyles({
  root: {
    height: 'auto',
    width: '100%',
  }
})

interface IProps extends IImageElm, WithStyles<typeof styles> {}

function ResponsiveImg({classes, ...props}: IProps) {
  return <Img className={classes.root} {...props} />
}

export default withStyles(styles)(ResponsiveImg)
