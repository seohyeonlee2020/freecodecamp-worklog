const form = document.getElementById("form")
const fullName = document.getElementById("full-name")
const email = document.getElementById("email")
const emailRegex = /^\w+@\w+\.com/
const orderNo = document.getElementById("order-no")
const orderRegex = /2024\d{6}/
const productCode = document.getElementById("product-code")
const prodRegex = /[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d{1}/
const quantity = document.getElementById("quantity")
const submitBtn = document.getElementById("submit-btn")
const complaintsGroup = document.getElementById("complaints-group")
const solutionsGroup = document.getElementById("solutions-group")
const complaintDescription = document.getElementById("complaint-description")

const complaintDescriptionContainer = document.getElementById("complaint-description-container")
complaintDescriptionContainer.style.display = "none";


const solutionDescription = document.getElementById("solution-description")
const solutionDescriptionContainer = document.getElementById("solution-description-container")
solutionDescriptionContainer.style.display = "none";

const validateComplaints = (obj) => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')

  console.log("checkbox result", Array.from(checkboxes).some(box => box.checked))

obj["complaints-group"] = Array.from(checkboxes).some(box => box.checked)

complaintsGroup.style.borderColor =  obj["complaints-group"] ? "green" : "red";
obj["complaint-description"] = true;

//if other is checked
if (document.getElementById("other-complaint").checked){
  complaintDescriptionContainer.style.display = "block";
  console.log("other complaint checked, validating written input")

  obj["complaint-description"] = (complaintDescription.value.length >= 20)
  complaintDescription.style.borderColor = obj["complaint-description"] ? "green" : "red";
  }

//complaintDescription.style.borderColor = (obj["complaint-description"] && obj["complaints-group"]) ? "green" : "red";

}

const validateSolutions = (obj) => {
   const solutions = document.querySelectorAll('input[name="solutions"]')

   const otherSolution = document.getElementById("other-solution")

     obj["solutions-group"] = Array.from(solutions).some(radio => radio.checked)
  solutionsGroup.style.borderColor = obj["solutions-group"] ? "green" : "red";


     obj["solution-description"] = true

  if (otherSolution.checked){
    solutionDescriptionContainer.style.display = "block";
    console.log("other solution checked, validating written input")
    obj["solution-description"] = solutionDescription.value.length >= 20
    solutionDescription.style.borderColor = obj["solution-description"] ? "green" : "red";
  }

}


const validateForm = () => {
  let obj = {}
  //full name is not empty
  obj["full-name"] = fullName.value ? true : false
  //email format validation
  obj.email = emailRegex.test(email.value)
  //order no validation
  obj["order-no"] = orderRegex.test(orderNo.value)

  obj["product-code"] = prodRegex.test(productCode.value)

  console.log("quantity value", quantity.value, parseInt(quantity.value) > 0 && /\d+/.test(quantity.value))
  obj.quantity = parseInt(quantity.value) > 0 && /\d+/.test(quantity.value)

//something is checked from complaintgroup
//if other checked, complaint description has at least 20 chasrs
 validateComplaints(obj)
 validateSolutions(obj)
//if other is checked in solutions group, description contains at least 20 char
  console.log("validateForm Returns:", obj)
  return obj
}

form.addEventListener("change", validateForm)


const isValid = (obj) => {
  console.log("isvalid output", Object.values(obj).every((item) => item))

  return Object.values(obj).every(item => item)

}

const fields = [fullName, email, orderNo, productCode, quantity]

fields.map(field => {
  console.log("fieldname", field.name)
  field.addEventListener("change", () => {
  console.log("change hit")
  console.log(validateForm()[field.name])
  field.style.borderColor = validateForm()[field.name] ? "green": "red";
  }
  )
})

console.log(emailRegex.test("example@domain.com"))

form.addEventListener("submit",
//call isValid
//highlight invalid field if any
() => {
  isValid(validateForm())
})
