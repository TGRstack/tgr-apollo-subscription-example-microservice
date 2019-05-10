// https://gist.github.com/Daniel-Hug/7273430
export const max = (array: number[]) => {
  return Math.max.apply(null, array)
}

export const min = (array: number[]) => {
  return Math.min.apply(null, array)
}

export const range = (array: number[]) => {
  return max(array) - min(array)
}

export const midrange = (array: number[]) => {
  return range(array) / 2
}

export const sum = (array: number[]) => {
  let num = 0
  for (let i = 0, l = array.length; i < l; i++) num += array[i]
  return num
}

export const mean = (array: number[]) => {
  return sum(array) / array.length
}

export const median = (array: number[]) => {
  array.sort(function(a, b) {
    return a - b
  })
  const mid = array.length / 2
  return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2
}

export const modes = (array: number[]) => {
  if (!array.length) return []
  const modeMap = {}
  let maxCount = 0
  let result: number[] = []

  array.forEach(function(val) {
    if (!modeMap[val]) modeMap[val] = 1
    else modeMap[val]++

    if (modeMap[val] > maxCount) {
      result = [val]
      maxCount = modeMap[val]
    } else if (modeMap[val] === maxCount) {
      result.push(val)
      maxCount = modeMap[val]
    }
  })
  return result
}

export const variance = (array: number[]) => {
  const newMean = mean(array)
  return mean(array.map(function(num) {
    return Math.pow(num - newMean, 2)
  }))
}

export const standardDeviation = (array: number[]) => {
  return Math.sqrt(variance(array))
}

export const meanAbsoluteDeviation = (array: number[]) => {
  const newMean = mean(array)
  return mean(array.map(function(num) {
    return Math.abs(num - newMean)
  }))
}

export const zScores = (array: number[]) => {
  const newMean = mean(array)
  const newStandardDeviation = standardDeviation(array)
  return array.map(function(num) {
    return (num - newMean) / newStandardDeviation
  })
}

// Function aliases:
export const average = mean
