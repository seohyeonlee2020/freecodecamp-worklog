const range = (a, b) => {
    const result = []
    for (let i=a; i <= b; i++){
      result.push(i)
    }
    return result
  }

  //get gcd
  const gcd = (a, b) => {
    console.log('gcd', !b ? a : gcd(b, a%b))
   return !b ? a : gcd(b, a%b)
  }

  //get lcm out of gcd
  const lcm = (a, b) => {
    return a * b / gcd (a, b)
  }

const smallestCommons = (arr) => {
  arr.sort((a,b) => a - b)
  // a smaller b larger
  // get arr from range
  //do that on everything
  const nums = range(arr[0], arr[1])
  console.log(nums)
  const ans = nums.reduce((acc, elem) => {
    console.log(`acc ${acc} elem ${elem}`)
    return lcm(acc, elem)})
  console.log(ans)
  return ans
}

smallestCommons([1, 5])
