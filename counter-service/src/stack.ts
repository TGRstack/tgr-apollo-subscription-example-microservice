import config from './config'
import middleware from './middleware'
import service from './service'

const Stack = new service({
  config,
  middleware,
}).start()

export default Stack
