const table = [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]]


const pairElement = (s) => {
  s = s.split("")
  console.log(s)
  const result = s.map((char) => table.filter((elem) => elem[0] == char)[0])

console.log(result)
return result
}

pairElement("ATCGA")
