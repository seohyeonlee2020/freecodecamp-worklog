const spinalCase = (msg) => {
  const wordRegex = /[A-Z]?[a-z]+/g
  const wordList = msg.match(wordRegex)
  console.log(wordList)
  if (!wordList){
    return ""
  }
  const result = wordList.map((word) => word.toLowerCase()).join("-")
  console.log(result)
  return result
}
