const imgs = document.querySelectorAll('.container figure')

imgs.forEach(img =>
{
    img.addEventListener('click', () =>
    {
        removeActiveClass()
        img.classList.add('active')
    })
})
function removeActiveClass()
{
    imgs.forEach(img => img.classList.remove('active'))
}