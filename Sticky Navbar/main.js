const header = document.querySelector('header')

window.addEventListener('scroll', () =>
{
    window.scrollY >= 150 ? header.classList.add('white') : header.classList.remove('white')
})