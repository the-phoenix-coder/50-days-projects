const items = document.querySelectorAll('.item')
const imgs = document.querySelectorAll('.image')

items.forEach(item => item.addEventListener('click', () =>
{
    items.forEach(item => item.classList.remove('active'))
    item.classList.add('active')
    const cat = item.dataset.name
    imgs.forEach(img =>
    {
        img.classList.add('hide')
        if (img.dataset.name === cat || cat == 'all')
        {
            img.classList.remove('hide')
            img.classList.add('show')
        } else
        {
            img.classList.add('hide')
            img.classList.remove('show')
        }
    })
}))