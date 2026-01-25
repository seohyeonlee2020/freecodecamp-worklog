const steamrollArray = (arr) => {
  // check type of elements. if anything is an array, flatten recursively
arr.map((elem) => {
  //let result = []
  if (Array.isArray(elem)){
    //index should be calculated from scratch bcs arr is being modified in place
    let index = arr.indexOf(elem)

    let before = !index ? []: arr.slice(0, index)
    //chunk after
    let after = (index == elem.length - 1) ? [] : arr.slice(index+1)
        console.log(`before ${before}, elem ${elem.toString()}, after ${after.toString()} index ${index}`)

    arr = [...before, ...elem, ...after]
    }
  })
    return arr.some((elem) => Array.isArray(elem)) ?
  steamrollArray(arr) : arr
}
