const themes = [{'name': 'light',  'message': 'light theme on'}, {'name': 'dark', 'message': 'dark theme on'}]

const themeSwitcher = document.getElementById("theme-switcher-button")

const themeDropdown = document.getElementById("theme-dropdown")

themeSwitcher.addEventListener("click", () => {
  if (themeDropdown.hidden){
    themeDropdown.hidden = false
  themeSwitcher.setAttribute("aria-expanded", true)
  }
  else{
    themeDropdown.hidden = true
    themeSwitcher.setAttribute("aria-expanded", false)
    }
  }
  )



const dropDownOptions = document.querySelectorAll('[role="menuitem"]')

dropDownOptions.forEach((option) => {
  option.addEventListener("click", () => {
  const htmlBody = document.querySelector("body")
    //get rid of work from previous clicks
    htmlBody.classList = []
  const themeId = option.getAttribute("id")
    console.log(`hit ${themeId}`)

    //add class corresponding to theme id
    htmlBody.classList.add(themeId)
    console.log(htmlBody.classList)
    //theme message gets added to <div> that
    const themeMsgBox = document.getElementById("theme-msg")
    //find corresponding msg
    console.log(themeId.split("-")[1])

    const obj = themes.filter((t) => themeId.split("-")[1] == t.name)[0]
    console.log("message", obj, obj.message)
    themeMsgBox.textContent = obj.message
    console.log(htmlBody.classList)
  })
})
