//https://www.freecodecamp.org/learn/javascript-v9/lab-sorted-index-finder/lab-sorted-index-finder
// the findIndex function identifies the index of first elem that satisfies condition mentioned in callback

const getIndexToIns = (arr, num) => {
  let idx = arr.sort((a, b) => a - b).findIndex((elem) => elem >= num)
  console.log(idx)
  return (idx == -1) ? arr.length : idx
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35))
