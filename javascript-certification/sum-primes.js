const sumPrimes = (num) => {
  if (num < 2){
    return 0
  }
  else if (num == 2){
    return 2
  }
  else if (num == 3){
    return 5
  }
  let primes = [2, 3]

  for (let i=4; i <= num; i++){
    //identify which ones are prime
    if (primes.every((p) => i % p != 0)){
      primes.push(i)
    }
  }
 // console.log(num, primes)
  return primes.reduce((acc, elem) => acc + elem)
  // add to array, sum all with reduce
}

sumPrimes(977)
