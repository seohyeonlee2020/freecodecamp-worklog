const translatePigLatin = (msg) => {
  //tests if word begins with cons. takes first cons or cons cluster in capturing grp
  const consRegex = /^[^aeiou]+/i
  const match = msg.match(consRegex)
  if (match){
    console.log("match", match)
    return msg.slice(match[0].length) + match[0] + "ay"
  }
  else{
    return msg + "way"
  }
//  console.log(`result for ${msg}: ${result}`)
}
