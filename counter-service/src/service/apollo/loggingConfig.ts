import config from 'config'
import * as colors from 'config/console_colors'

const loggingConfig = {
  formatError: (error: any) => {
    !config.isProd && console.log(colors.error(error)) // tslint:disable-line no-console
    return error
  },
  formatResponse: (response: any) => {
    !config.isProd && console.log(colors.info(response)) // tslint:disable-line no-console
    return response
  },
}

export default loggingConfig
