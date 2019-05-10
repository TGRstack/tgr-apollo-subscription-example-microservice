export const LimitedNumber = (v = 0, max = 100, min = 0, dec = 2) => {
  let res =  v > max ? max
    : v < min ? min
    : v

  res = parseFloat(parseFloat(`${res}`).toFixed(dec))
  if (v > max) {
    // console.log('LimitedNumber> ', res, {v, max, min, t0: v > max, t1: v < max})
  }
  return res
}
