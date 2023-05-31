const icons = document.querySelectorAll('.icon')

icons.forEach(icon =>
{
    icon.addEventListener('click', () =>
    {
        icon.parentNode.classList.toggle('active')
    })
})