import { webaddress } from 'modules/utils/string'
import * as env from './environment'
const {
  isProd,
  SERVICE_INFO,
  GRAPHQL_EXPLORE,
  GRAPHQL_REST,
  GRAPHQL_WS,
  HOST_NAME,
  ENDPOINT_OPS,
  PORT,
  SSL_ENABLED,
  SSL_CRT,
  SSL_KEY,
} = env

const HOST_PATH = webaddress({
  host: HOST_NAME,
  path: '',
  port: PORT,
}).slice(0, -1)

const HOST_WS_PATH = webaddress({
  protocol: 'ws',
  host: HOST_NAME,
  path: '',
  port: PORT,
}).slice(0, -1)

const SSL = !!SSL_ENABLED ? SSL_ENABLED.toLowerCase() === 'true' : false

export default {
  SERVICE_INFO,

  GRAPHQL_EXPLORE: GRAPHQL_EXPLORE || GRAPHQL_REST,
  GRAPHQL_REST,
  GRAPHQL_WS,

  ENDPOINT_OPS,

  HOST_PATH,
  HOST_WS_PATH,

  isProd,

  // JWT_SECRET,

  // PG: {
  //   DB: PG_DB,
  //   HOST: PG_HOST,
  //   PASS: PG_PASS,
  //   PORT: PG_PORT,
  //   USER: PG_USER,
  // },

  PORT,
  SSL,
  SSL_CRT,
  SSL_KEY,
}
