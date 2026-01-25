const diffArray = (arr1, arr2) => {

//filter arr1 for things that dont appear in arr2
return arr1.filter((elem) => !arr2.includes(elem)).concat(arr2.filter((elem) => !arr1.includes(elem)))
// vice versa

//concat
}
