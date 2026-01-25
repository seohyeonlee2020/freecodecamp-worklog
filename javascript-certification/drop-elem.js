const dropElements = (arr, func) => {
  const filtered = arr.filter(func)
  console.log(filtered)
  if (filtered.length == 0){
    return []
  }
    const idx = arr.indexOf(filtered[0])
    return arr.slice(idx)
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
