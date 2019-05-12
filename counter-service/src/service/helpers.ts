import * as colors from 'config/console_colors'
// tslint:disable no-any
export const SUCCESS_MESSAGE = ({
  SERVICE_INFO,
  ENDPOINT_API,
  GRAPHQL_REST: REST,
  GRAPHQL_EXPLORE: EXPLORE,
  GRAPHQL_WS: WS,
  HOST_PATH,
  HOST_WS_PATH
}: any) => {
  // EVERYTHING BOOTED SUCCESFULLY
  const SE = (t = '') => t.toUpperCase().substr(0, 4)
  const onlineTitle = `${SE(process.env.NODE_PLATFORM)} Online (${SE(process.env.NODE_ENV)})`
  const removeDoubleSlashes = (str: string) => str.split('//').join('/')
  const combo = (a: string, b: string) => [removeDoubleSlashes(a), removeDoubleSlashes(b)].join('')
  return colors.msg(`\n\n
  🌐    ${onlineTitle}    🌐
  -------------------------------------------------------
  📡    endpoint    ${combo(HOST_PATH, REST)}
  🎮    explorer    ${combo(HOST_PATH, EXPLORE)}
  ➿    websocket   ${combo(HOST_WS_PATH, WS)}
  🕵🏻   info        ${combo(HOST_PATH, `${SERVICE_INFO}/info`)}
  🕵🏻   metrics     ${combo(HOST_PATH, `${SERVICE_INFO}/metrics`)}
  -------------------------------------------------------
  📞    upstream    ${combo(ENDPOINT_API, '')}
  -------------------------------------------------------`)
}
