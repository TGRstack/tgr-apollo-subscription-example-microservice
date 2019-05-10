export const sortNumberbyKey = (key: string, desc = false) => (a, b) => {
  const numbA = parseFloat(a[key])
  const numbB = parseFloat(b[key])
  const dir = desc ? 1 :  - 1
  const res =  (numbA < numbB) ? 1 : (numbA > numbB) ? -1 : 0
  return dir * res
}
