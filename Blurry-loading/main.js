const number = document.querySelector('h1 span')
const body = document.body

let currentNum = 0
let bluryCount = 100


window.addEventListener('load', () =>
{
    setInterval(() => {
        if (currentNum < 100)
        {
            currentNum++
            bluryCount--
            number.textContent = currentNum
            body.style.backdropFilter = `blur(${bluryCount}px)`
        }
    }, 50);
})