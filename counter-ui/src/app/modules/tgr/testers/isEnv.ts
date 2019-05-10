const {NODE_ENV} = process.env

enum envTypes {
  DEV  = 'development',
  PROD = 'production',
  STAG = 'staging',
}

export const ENV = (() => {
  const env = (NODE_ENV || '').toLowerCase()
  let res = envTypes.PROD

  if (env === envTypes.DEV  || env === 'dev') res = envTypes.DEV
  if (env === envTypes.STAG || env === 'stage') res = envTypes.STAG

  return res
})()

export const isDev = () => ENV === envTypes.DEV
export const isStag = () => ENV === envTypes.STAG
export const isProd = () => ENV === envTypes.PROD
