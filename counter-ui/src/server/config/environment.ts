// DON'T USE .env results directly because everything is a string or undefined
// use config/environment as an abstract interface and caster for .env
import { webaddress } from '!server/modules/utils/string'

const {
  GQL_ENDPOINT = '0.0.0.0:3001/graphql',
  GQL_WS_ENDPOINT = '0.0.0.0:3001/subscriptions',
  HOST_NAME = 'localhost',
  NODE_ENV = 'dev',
  NODE_PLATFORM = 'server',
  SSL: SSL_ENABLED,
  PORT = 3000,
  SSL_CRT,
  SSL_KEY,
} = process.env

const isSSL = !!SSL_ENABLED ? SSL_ENABLED.toLowerCase() === 'true' : false

const isProd = NODE_ENV === 'prod' || NODE_ENV === 'production'

const HOST_PATH = webaddress({
  host: HOST_NAME,
  path: '',
  port: PORT,
  protocol: isSSL ? 'https' : 'http'
}).slice(0, -1)

export {
  isProd,
  isSSL,

  GQL_ENDPOINT,
  GQL_WS_ENDPOINT,

  HOST_PATH,

  NODE_ENV,
  NODE_PLATFORM,

  PORT,
  SSL_CRT,
  SSL_KEY,
}
