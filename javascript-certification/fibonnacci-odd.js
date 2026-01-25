//make fib sequence
//


const sumFibs = (limit) => {

  const fib = [0, 1]
  if (limit == 1){
    return fib[1]
  }
  let result = 1
  let i = 2
  while (true) {
    let newfib = fib[i-1] + fib[i-2]
    console.log(newfib)
    fib.push(newfib)
    if (newfib > limit){
            return result
    }
    else if (newfib % 2 == 1){
      console.log('odd hit')
      result = result + newfib
      console.log(newfib, result)
    }
    i++;
  }
}

console.log(sumFibs(1000))
