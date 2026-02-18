const form = document.getElementById("form")
const rules = {
  'full-name': (val) => !!val,
    'email': /^\w+@\w+\.com/,
    'order-no': /2024\d{6}/,
    'product-code': /[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d{1}/,
    'quantity': (val) => parseInt(val) > 0  && (/\d+/.test(val))
}

const submitBtn = document.getElementById("submit-btn")

const solutionsGroup = document.getElementById("solutions-group")

const complaintDescriptionContainer = document.getElementById("complaint-description-container")
complaintDescriptionContainer.style.display = "none";

const solutionDescription = document.getElementById("solution-description")
const solutionDescriptionContainer = document.getElementById("solution-description-container")
solutionDescriptionContainer.style.display = "none";

const simpleInput = form.querySelectorAll('#personal-info input, #product-info input')


const validateForm = () => {
    let obj = {}
    //handle text input

    simpleInput.forEach((item) => {
        const rule = rules[item.name]
        if (rule instanceof RegExp){
            obj[item.name] = rule.test(item.value)
        }
        else if (typeof rule === "function" ){
            obj[item.name] = rule(item.value)
        }
        else{
            obj[item.name] = !!item.value
        }
    })

    //handle input from groups
    const validateGroup = (groupName, groupId, otherId, descriptionId) => {

       const group = document.getElementById(groupId)
       const other = document.getElementById(otherId)
       const description = document.getElementById(descriptionId)

        const options = group.querySelectorAll(`input[name="${groupName}"]`)
        //is something checked in this group?
      obj[groupId] = Array.from(options).some(item => item.checked)
        obj[descriptionId] = !other.checked || description.value.length >= 20

  console.log("checked", Object.entries(options).some(item => item.checked))
    }

    validateGroup("complaint", "complaints-group", "other-complaint", "complaint-description")
    validateGroup("solutions", "solutions-group", "other-solution", "solution-description")

    console.log("validateform returns", obj)
    return obj
}

const isValid = (state) => {
  return Object.values(state).every(item => item)
}


const updateUI = () => {
  const state = validateForm()
    //simple input
    simpleInput.forEach((item) => {
      console.log(item.name, state[item.name] )
        item.style.borderColor = state[item.name] ? "green" : "red";
    })

    const complaintsGroup = document.getElementById("complaints-group")
    const complaintDescription = document.getElementById("complaint-description")
    //group
    complaintsGroup.style.borderColor = state[complaintsGroup.id] ? "green" : "red";

    if (document.getElementById("other-complaint").checked){
      complaintDescriptionContainer.style.display = "block"
    }

   complaintDescription.style.borderColor = state[complaintDescription.id] ? "green" : "red";

    const solutionsGroup = document.getElementById("solutions-group")
    //group
    solutionsGroup.style.borderColor = state[solutionsGroup.id] ? "green" : "red";

    if (document.getElementById("other-solution").checked){
      solutionDescriptionContainer.style.display = "block"
    }
       solutionDescription.style.borderColor = state[solutionDescription.id] ? "green" : "red";

}

//console.log(document.getElementById("complaints-group").name)
form.addEventListener("change", updateUI)

form.addEventListener("submit", () => {
  isValid(validateForm())
})

}
