const mainCup = document.querySelector('.big')
const percent = document.querySelector('.percent')
const smallCups = document.querySelectorAll('.small')
const liters = document.querySelector('.big h2')

fill()

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => activate(index))
})

function activate(index)
{
    if (index === smallCups.length - 1 && smallCups[index].classList.contains('active')) index--
    else if (smallCups[index].classList.contains('active') && !smallCups[index].nextElementSibling.classList.contains('active'))
    {
        index--
    }
    smallCups.forEach((cup, index2) =>
    {
        if (index2 <= index)
        {
            cup.classList.add('active')
        } else
        {
            cup.classList.remove('active')
        }
    })
    fill()
}

function fill()
{
    const fullCups = document.querySelectorAll('.small.active').length
    const totalCups = smallCups.length
    if (fullCups === 0)
    {
        percent.style.visibility = 'hidden'
        percent.style.height = 0
    } else
    {
        percent.style.visibility = 'visible'
        percent.style.height = `${fullCups / totalCups * 330}px`
        percent.innerText = `${fullCups / totalCups * 100}%`
    }
    if (fullCups === totalCups)
    {
        mainCup.style.visibility = 'hidden'
        mainCup.style.height = 0
    } else
    {
        mainCup.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}