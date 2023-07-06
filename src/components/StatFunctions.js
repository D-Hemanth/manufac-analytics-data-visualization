// Mean function
export const mean = (arr) => {
  let sum = arr.reduce((a, b) => a + b, 0)
  return sum / arr.length
}

// Median function
export const median = (arr) => {
  const arrSorted = arr.sort((a, b) => a - b)
  return arrSorted.length % 2 === 0
    ? (arrSorted[arrSorted.length / 2 - 1] + arrSorted[arrSorted.length / 2]) /
        2
    : arrSorted[Math.floor(arrSorted.length / 2)]
}

// Mode function
export const mode = (arr) => {
  // convert the array elements to have only 3 decimal places so that we can calculate mode(the number most frequently seen in the dataset)
  arr = arr.map((value) => value.toFixed(3))

  const frequencyTable = {}
  arr.forEach((elem) => (frequencyTable[elem] = frequencyTable[elem] + 1 || 1))

  let modes = []
  let maxFrequency = 0
  for (const key in frequencyTable) {
    if (frequencyTable[key] > maxFrequency) {
      modes = [Number(key)]
      maxFrequency = frequencyTable[key]
    } else if (frequencyTable[key] === maxFrequency) {
      modes.push(Number(key))
    }
  }

  if (modes.length === Object.keys(frequencyTable).length) modes = []

  if (modes.length === 0) return 'No Mode'
  return modes.length > 1
    ? modes.map((mode) => mode.toFixed(3) + ', ')
    : modes.map((value) => value.toFixed(3))
}
