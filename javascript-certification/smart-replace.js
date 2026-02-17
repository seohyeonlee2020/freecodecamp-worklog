const myReplace = (str, target, replaceWith) => {

  const targetRgx = new RegExp(target, "gi")
  const result = [...str.matchAll(targetRgx)]
  console.log("result", result)

  for (let i= result.length-1; i >= 0; i--){

    let index = result[i].index
    console.log(index, str[index])
        //check case at captured index
    let char = str[index]
    if (/[A-Z]/.test(char)){
      replaceWith = replaceWith.charAt(0).toUpperCase() + replaceWith.slice(1)
      //replace with capitalized version of replaceWith
    }
    else{
      replaceWith = replaceWith.charAt(0).toLowerCase() + replaceWith.slice(1)
      //replace with lowercase version of replaceWith
    }
    str = str.slice(0, index) + replaceWith + str.slice(index+target.length)
      //console.log("new", str)
  }

  console.log(str)
  return str
}

//myReplace("I am llfrustrllated and honestlly freaked out", "Ll", "l")

myReplace("Let us go to the store", "store", "mall")
