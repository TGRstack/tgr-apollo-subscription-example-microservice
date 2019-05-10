
export const sortAlphaByKey = (key, desc = false) => (a, b) => {
  const textA = a[key] && a[key].toUpperCase()
  const textB = b[key] && b[key].toUpperCase()
  const dir = desc ? 1 :  - 1
  const res =  (textA < textB) ? 1 : (textA > textB) ? -1 : 0
  return dir * res
}
export const sortNumberbyKey = (key: string, desc = false) => (a, b) => {
  const numbA = parseFloat(a[key])
  const numbB = parseFloat(b[key])
  const dir = desc ? 1 :  - 1
  const res =  (numbA < numbB) ? 1 : (numbA > numbB) ? -1 : 0
  return dir * res
}
export const naturalCompare = (desc = false) => function(a, b) {
  function pad(n) { return ('00000000' + n).substr(-8) }
  function natural_expand(a) { return a.replace(/\d+/g, pad) }

  if (desc) {
    return natural_expand(b).localeCompare(natural_expand(a))
  }
  return natural_expand(a).localeCompare(natural_expand(b))
}

export const naturalCompareObj = (key, desc = false) => function(a, b) {
  const A = a[key]
  const B = b[key]
  // console.log({A, B})
  // if (!A || !B) {
  //   console.warn('naturalCompareObj() called without a arg ', {A, B})
  //   return 0
  // }

  function pad(n) { return ('00000000' + n).substr(-8) }
  function natural_expand(s) { return `${s}`.replace(/\d+/g, pad) }

  if (desc) {
    return natural_expand(B).localeCompare(natural_expand(A))
  }
  return natural_expand(A).localeCompare(natural_expand(B))
}
