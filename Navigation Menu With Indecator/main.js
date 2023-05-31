const nav = document.querySelector('nav')
const lis = document.querySelectorAll('li')
const indicator = document.querySelector('.indicator')

lis.forEach((li, i) =>
{
    li.addEventListener('click', e =>
    {
        e.preventDefault()
        nav.querySelector('.active').classList.remove('active')
        li.classList.add('active')
        indicator.style.transform = `translateX(calc(${i * 90}px))`
    })
})