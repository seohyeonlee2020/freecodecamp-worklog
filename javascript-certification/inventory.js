//https://www.freecodecamp.org/learn/javascript-v9/lab-inventory-management-program/build-an-inventory-management-program
// 01/24/2026

const inventory = []

const findProductIndex = (prodName) => {
    //use lowercase product name
  prodName = prodName.toLowerCase()
 // console.log(prodName)
  let index = -1;

  inventory.filter((item) => {
    if (item.name.toLowerCase() == prodName){
      index = inventory.indexOf(item)
    }
  })
  return index
}

const addProduct = (obj) => {
  //if obj in inventory
  let index = findProductIndex(obj.name)
  //console.log(index)
  if (index >= 0){
    inventory[index].quantity = inventory[index].quantity + obj.quantity
    console.log(`${obj.name.toLowerCase()} quantity updated`)
  }
  else {
    obj.name = obj.name.toLowerCase()
    inventory.push(obj)
    console.log(`${obj.name} added to inventory`)
  }
}

const removeProduct = (prodName, quantity) => {
  let index = findProductIndex(prodName)
  prodName = prodName.toLowerCase()

  if (index >= 0){
    if (inventory[index].quantity < quantity){
          console.log(`Not enough ${prodName} available, remaining pieces: ${inventory[index].quantity}`)
    }
    else {
      inventory[index].quantity = inventory[index].quantity - quantity

      if (inventory[index].quantity ==0){
        //removes object from inventory
        inventory.splice(index, 1)
        console.log(inventory)
      }
      else {
    console.log(`Remaining ${prodName} pieces: ${inventory[index].quantity}`)
      }
    }
  }
  else {
    console.log(`${prodName} not found`)
  }
}


addProduct({name: "FLOUR", quantity: 5})


addProduct({name: "ipad", quantity: 2})

removeProduct("FLOUR", 5)

console.log(inventory)
