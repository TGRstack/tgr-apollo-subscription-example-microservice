/* GetRandomInt()
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min: number= 0, max: number = 99999999) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export function randomHex() {return getRandomInt(0, 16).toString(16)}
export function getRandomHex() {
  return `#${randomHex()}${randomHex()}${randomHex()}${randomHex()}${randomHex()}${randomHex()}`
}
// function getRandomRGBA() {
//     const o = Math.round, r = Math.random, s = 255
//     return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')'
// }

// tslint:disable-next-line no-any
export function pickOne(arr: any[]) {
  const index = getRandomInt(0, arr.length - 1)
  return arr[index]
}

// tslint:disable-next-line no-any
export function pickOneKey(obj: {[key: string]: any}) {
  return pickOne(Object.keys(obj))
}

// tslint:disable-next-line no-any
export function pickOneKeyValue(obj: {[key: string]: any}) {
  return obj[pickOneKey(obj)]
}

export const getAlpha = (n: number) => (n + 10).toString(36).toUpperCase()
export const getRandomAlpha = () => getAlpha(getRandomInt(0, 25))
