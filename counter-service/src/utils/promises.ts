// export function getRandomInt(min: number= 0, max: number = 99999999) {
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }
// async function wait(ms = getRandomInt(1000, 9999)) {
//   return new Promise(resolve => {
//     console.log('Waiting for ', ms, 'ms')
//     setTimeout(resolve, ms)
//   })
// }

// tslint:disable-next-line no-any
export function promiseSeries(providers: Array<(() => Promise<any>)>) {
  const ret = Promise.resolve(null)
  const results = []

  return providers.reduce(function(result, provider, index) {
    return result.then(function() {
      return provider().then(function(val) {
        // console.log("FINISHED A PROMISE")
        results[index] = val
      })
    })
  },                      ret).then(function() {
    return results
  })
}
