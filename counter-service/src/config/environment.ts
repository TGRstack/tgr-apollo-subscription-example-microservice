const {
  SERVICE_INFO = '/info', // express-actuator
  GRAPHQL_EXPLORE = '',
  GRAPHQL_REST = '',
  GRAPHQL_WS = '',
  HOST_NAME = 'localhost',
  ENDPOINT_OPS = '',
  NODE_ENV,
  // JWT_SECRET = 'crazycat',
  // PG_DB = 'public',
  // PG_HOST = 'localhost',
  // PG_PASS = '',
  // PG_PORT = 27000,
  // PG_USER = '',
  PORT = 3000,
  SSL: SSL_ENABLED,
  SSL_CRT,
  SSL_KEY,
} = process.env

export const isProd = NODE_ENV === 'prod' || NODE_ENV === 'production'

export {
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
}
