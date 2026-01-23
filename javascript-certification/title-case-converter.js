//https://www.freecodecamp.org/learn/javascript-v9/lab-title-case-converter/build-a-title-case-converter
// 01/23/2026

const titleCase = (str) => {
  const lst = str.split(" ")

const newLst = lst.map((word) =>
  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
   )

console.log(lst, newLst)
return newLst.join(" ")

}

console.log(titleCase("I'm a little tea pot"))
