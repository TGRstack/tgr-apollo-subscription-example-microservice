// TODO: make Apollo errors accessible via the logger module

import { isProd } from 'config/environment'
import * as fs from 'fs'
// import * as stream from 'stream'
import * as winston from 'winston'

import LogConfig, { outputDir } from './config'
import LogLevels from './levels'

class WinstonLogger {
  app: any // tslint:disable-line no-any // winston.

  // FIXME: morgan logs written into winston
  // create a stream object with a 'write' function that will be used by `morgan`
  // public stream = () => new stream.Duplex({
  //   write(message: string) {
  //     console.log({message})
  //     this.app.express(message)
  //   }
  // })
  // public stream = split().on('data', function(message: string) {
  //   this.app.info(message)
  // })
  // public stream = {
  //   write: (message: any) => { // tslint:disable-line no-any
  //     // use the 'info' log level so the output will be picked up by both transports (file and console)
  //     console.log(message)
  //     this.app.info(message)
  //   },
  // }

  constructor() {
    // instantiate new loggers with these settings
    this.setup()

    const consoleConfig = isProd
    ? LogConfig.console.prod
    : LogConfig.console.dev

    // Custom loglevels and corresponding colors
    winston.addColors(LogLevels.colors)
    // ISSUE: https://github.com/winstonjs/winston/issues/1385
    // tslint:disable-next-line no-any
    const app = (winston as any).createLogger({
      exitOnError: false, // do not exit on handled exceptions
      levels: LogLevels.levels,
      transports: [
        // - Write all logs to `all.log`
        new winston.transports.File(LogConfig.file.all),
        // - Write all logs with level `info` and below to `combined.log`
        new winston.transports.File(LogConfig.file.combined),
        // - Write all logs error (and below) to `error.log`.
        new winston.transports.File(LogConfig.file.error),
        // - Console all logs isProd? info : silly
        new winston.transports.Console(consoleConfig)
      ],
    })

    this.app = app
    this.init()
  }

  private init() {
    // Loaded
    this.app.info({
      message: 'Winston Logger Loaded'
    })
  }

  private setup() {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir)
    }
  }
}

const SystemLogger = new WinstonLogger().app
// export const SystemLoggerStream = SystemLogger.stream
export default SystemLogger
