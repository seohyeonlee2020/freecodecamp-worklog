const uniteUnique = (...args) => {
  console.log(args)
  const newArr = []
  for (let i=0; i < args.length; i++){
    const arr = args[i]
    //console.log('arr', arr)
    for (let j=0; j < arr.length; j++){
      //console.log(`arr[j] ${arr[j]} of arr ${arr}`)
      console.log(`${newArr.includes(arr[j])}, newArr ${newArr} arr[j] ${arr[j]}`)
      if (!newArr.includes(arr[j])){
        newArr.push(arr[j])
      }
    }
  }
  return newArr
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4]))
