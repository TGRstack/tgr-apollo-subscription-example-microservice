// DON'T USE .env results directly because everything is a string or undefined
// use config/environment as an abstract interface and caster for .env
// NOTE: all values in .env.development must be in .env.example

import { ENV as NODE_ENV, isProd } from '_modules/tgr/testers/'

const {
  SSL: SSL_ENABLED,
} = process.env

const isSSL = !!SSL_ENABLED
  ? SSL_ENABLED.toLowerCase() === 'true'
  : false

// "https://w5xlvm3vzz.lp.gql.zone/graphql"
const {
  GQL_ENDPOINT = '/graphql',
  // GQL_WS_ENDPOINT = '/subscriptions', // FIXME: not working
} = process.env

export {
  isProd,
  isSSL,
  NODE_ENV,
  GQL_ENDPOINT,
  // GQL_WS_ENDPOINT,
}
