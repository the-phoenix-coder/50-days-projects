const contents = document.querySelectorAll('.content')
const lis = document.querySelectorAll('li')

lis.forEach((li, i) =>
{
    li.addEventListener('click', () =>
    {
        hideAllContents()
        hideAllLis()
        li.classList.add('active')
        contents[i].classList.add('show')
    })
})
function hideAllContents()
{
    contents.forEach(content => content.classList.remove('show'))
}
function hideAllLis()
{
    lis.forEach(li => li.classList.remove('active'))
}