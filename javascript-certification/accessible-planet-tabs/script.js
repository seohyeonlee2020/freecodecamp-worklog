const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        //make everything disappear
        tabs.forEach(t => {
            t.setAttribute("aria-selected", false)
        })
        panels.forEach(p => {
            p.hidden = true
        })
    })

    //make tab appear
    tab.setAttribute("aria-selected", true)

    //find panel connected to tab and make it appear
    const associatedPanel = tab.getAttribute("aria-controls")
    const panel = document.getElementById(associatedPanel)
    panel.hidden = false
})
