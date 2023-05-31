const img = document.querySelector('.img')
const count = document.querySelector('.count')

let countIndex = 0

window.ondblclick = like

function like(e)
{
    const heart = document.createElement('div')
    heart.classList.add('heart')
    img.append(heart)

    e.target === img && react()

    const top = e.target.offsetTop
    const left = e.target.offsetLeft

    let x = e.clientX
    let y = e.clientY

    let posX = x - left
    let posY = y - top

    heart.style.top = `${posY}px`
    heart.style.left = `${posX}px`
}
function react()
{
    countIndex++

    count.innerText = countIndex

    img.classList.add('active')
    
    setTimeout(() => {
        img.classList.remove('active')
    }, 500);
}