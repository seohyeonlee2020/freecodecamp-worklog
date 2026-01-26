const updateCount = (btn) => {
    const countEl = btn.querySelector('.count')
    let currentCount = +countEl.textContent.split("/")[0]
    if (currentCount == 10) return;
    currentCount++;
    countEl.textContent = `${currentCount}/10`
}

const btns = document.querySelectorAll('.emoji-btn')
btns.forEach((btn) => {
    btn.addEventListener("click", () => {updateCount(btn)})
})

const resetCount = (btn) => {

    const countEl = btn.querySelector('.count')
    let currentCount = +countEl.textContent.split("/")[0]
    currentCount = 0;
    countEl.textContent = `${currentCount}/10`
}

const resetBtn = document.querySelector('#reset-btn')
resetBtn.addEventListener("click", () => {btns.forEach((btn) => resetCount(btn))})
