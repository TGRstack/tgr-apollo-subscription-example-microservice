import { SERVICE_INFO } from 'config/environment'
import * as express from 'express'
import * as actuator from 'express-actuator'

export default function logger(app: express.Application) {
  const actuatorMiddleware = actuator(SERVICE_INFO)
  app.use(actuatorMiddleware)
}
