// tslint:disable

export function debounce(fn: (...args: any[]) => any, delay: number = 300) {
  let timeoutID = null
  const args = arguments
  return function() {
    clearTimeout(timeoutID)
    const that = this
    timeoutID = setTimeout(function() {
      fn.apply(that, args)
    },                     delay)
  }
}

// export function throttle(
//   func: (...args: any[]) => any,
//   delay: number = 300,
//   // options: { leading: boolean, trailing: boolean} = {leading: true, trailing: true}
// ) {
//   let timeout = null
//   const args = arguments

//   console.log(0, {func, args, delay, timeout})
//   return function() {
//     const that = this
//     console.log(1, {func, delay, timeout})
//     if (!timeout) {
//       timeout = setTimeout(() => {
//         func.call(that, ...args)
//         timeout = null
//       },                   delay)
//     }
//   }
// }

export function throttle(
  callback: (...args: any[]) => any,
  wait: number = 300,
  // options: { leading: boolean, trailing: boolean} = {leading: true, trailing: true}
) {
  let wait = false                  // Initially, we're not waiting
  return function() {               // We return a throttled function
    if (!wait) {                   // If we're not waiting
      callback.call()           // Execute users function
      wait = true               // Prevent future invocations
      setTimeout(function() {   // After a period of time
          wait = false          // And allow future invocations
      },         limit)
    }
  }
}
