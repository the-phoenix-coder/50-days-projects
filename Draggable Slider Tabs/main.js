const tabsContainer = document.querySelector('.tabs')
const tabs = document.querySelectorAll('.tab')
const icons = document.querySelectorAll('svg')

let isDragging = false


console.log(tabsContainer.clientWidth)

const handleIcons = scrollValue =>
{
    let maxScroll = tabsContainer.scrollWidth - tabsContainer.clientWidth
    icons[0].parentElement.style.display = scrollValue <= 0 ? 'none' : 'flex'
    icons[1].parentElement.style.display = maxScroll - scrollValue <= 1 ? 'none' : 'flex'
}

icons.forEach(icon =>
{
    icon.addEventListener('click', () =>
    {
        let scrollWidth = tabsContainer.scrollLeft += icon.id === 'left' ? -340 : 340
        handleIcons(scrollWidth)
    })
})

tabs.forEach(tab =>
{
    tab.addEventListener('click', () =>
    {
        tabsContainer.querySelector('.active').classList.remove('active')
        tab.classList.add('active')
    })
})

const dragging = e =>
{
    if (!isDragging) return
    tabsContainer.classList.add('dragging')
    tabsContainer.scrollLeft -= e.movementX
    handleIcons(tabsContainer.scrollLeft)
}

const dragStop = () =>
{
    isDragging = false
    tabsContainer.classList.remove('dragging')
}

tabsContainer.addEventListener('mousedown', () => isDragging = true)
tabsContainer.addEventListener('mousemove', dragging)
document.addEventListener('mouseup', dragStop)