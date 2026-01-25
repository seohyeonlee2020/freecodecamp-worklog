const generatePassword = (len) => {
  const table = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()`;
  let pwd = ""
  for (let i=0; i< len; i++){
    pwd = pwd + table[Math.floor(Math.random() * table.length)]
  }
  return pwd
}

let password = generatePassword(6);
console.log('Generated password: '+ password
)
