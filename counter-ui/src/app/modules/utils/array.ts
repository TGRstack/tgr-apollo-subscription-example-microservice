import { Ins } from '../types/common'

export const uniqArray = (arr: Ins[]) => {
  return [...new Set(arr)]
}

export const addItemToUniqArray = (item: Ins, arr: Ins[]) => {
  // const res = [...arr]
  // if (res.indexOf(item) === -1) res.push(item)
  return uniqArray([...arr, item])
}

export const excludeArr = (arr: Ins[], exclude: Ins[]) => arr.filter(el => !exclude.includes(el))

// tslint:disable-next-line no-any
export const flatArray = (arr: any[]) => arr.reduce((acc, val) => acc.concat(val), [])

// tslint:disable-next-line no-any
export const sumArray = (arr: any[]) => arr.reduce((t: number, n: number) => t += n)

// tslint:disable-next-line no-any
export const transf90 = (arr: any[][]) => arr[0].map((_col, i) => arr.map(row => row[i]))

export const arrMatrix = (height: number, width: number): number[][] =>
  Array.from(Array(height)).map(() => Array.from(Array(width).fill(0)))

// tslint:disable-next-line no-any
export const arrDiags = (arr: any[][]) => {
  // a diagonal works from 2 locations
  // top-left to bot-right
  const height = arr.length
  const TLBR = Array.from(Array(arr.length)).map((_, i) => {
    const y = 0
    const x = 0
    return arr[y + i][x + i]
  })

  // bot-left to top-right
  const BLTR = Array.from(Array(arr.length)).map((_, i) => {
    const y = height - 1
    const x = 0
    return arr[y - i][x + i]
  })

  return [TLBR, BLTR]
}

// tslint:disable-next-line ban-types
export function getIndexOfObjInArray(arr: Object[], key: string, val: Ins) {
  const cb = (acc: number, curr: {}, index: number) => {
    if (curr[key] === val && acc === -1) {
        return index
    }

    return acc
  }
  return arr.reduce(cb, -1)
}
