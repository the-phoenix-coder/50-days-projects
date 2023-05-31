const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const steps = document.querySelector('.steps span')
const stepNums = document.querySelectorAll('.steps div')

let current = 0
let width = 0


check()
updateWidth()

next.addEventListener('click', () => {
    current++
    addActive()
    check()
    updateWidth()
})
prev.addEventListener('click', () => {
    removeActive()
    current--
    check()
    updateWidth()
})

function addActive() {
    for(let i = 0; i < stepNums.length; i++) {
        stepNums[current].classList.add('active')
    }
}
function removeActive() {
    for(let i = 0; i < stepNums.length; i++) {
        stepNums[current].classList.remove('active')
    }
}

function check()
{
    if(current >= stepNums.length - 1) {
        next.disabled = true
    }else {
        next.disabled = false
    }
    if(current >= 1) {
        prev.disabled = false
    }else {
        prev.disabled = true
    }
}

function updateWidth()
{
    if (current == 0)
    {
        width = 0
    }
    else if (current == 1)
    {
        width = 35
    } else if (current == 2)
    {
        width = 65
    } else if (current == 3)
    {
        width = 100
    }
    steps.style.width = `${width}%`
}