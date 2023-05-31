const leftSlider = document.querySelector('.left')
const rightSlider = document.querySelector('.right')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const length = document.querySelectorAll('.right div').length

let current = 0
leftSlider.style.top = `-${(length - 1) * 100}vh`

next.addEventListener('click', () => change('up'))
prev.addEventListener('click', () => change('down'))

function change(dir)
{
    if (dir === 'up')
    {
        current++
        if (current > length - 1)
        {
            current = 0
        }
    } else if (dir === 'down')
    {
        current--
        if (current < 0)
        {
            current = length - 1
        }
    }
    rightSlider.style.transform = `translateY(-${current * 100}%)`
    leftSlider.style.transform = `translateY(${current * 100}%)`
}