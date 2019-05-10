export const unixToJS = n => n / 1000
export const jsToUnix = n => n * 1000
export const speedMpsKph = mps => {
  const kmps = mps / 1000
  const res  = kmps * (60 * 60)
  // console.log(mps, {
  //   res, kmps,
  // })

  return res
}
export const mpsFromPeriod = (
  meters, startTime, stopTime
) => {
  const seconds = (stopTime - startTime) / 1000
  return meters / seconds
}
