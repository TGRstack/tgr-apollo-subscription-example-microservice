export const makeSelectOptionFromEnum = obj => {
  const keys = Object.keys(obj)
  return Object.values(obj).map((label, k) => ({
    label,
    value: keys[k]
  }))
}

export const getEnumKeyByValue = (obj, val) => {
  const keys = Object.keys(obj)
  const dex = Object.values(obj).indexOf(val)
  return keys[dex]
}
