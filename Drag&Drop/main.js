const fill = document.querySelector('.fill')
const emptyDivs = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

emptyDivs.forEach(empty =>
{
    empty.addEventListener('dragover', overing)
    empty.addEventListener('dragenter', entering)
    empty.addEventListener('dragleave', leaving)
    empty.addEventListener('drop', droping)
})

function dragStart()
{
    this.classList.add('hold')
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd()
{
    this.className = 'fill'
}

function overing(e)
{
    e.preventDefault()
}

function entering(e)
{
    this.classList.add('hovered')
}

function leaving()
{
    this.className = 'empty'
}
function droping()
{
    this.className = 'empty'
    this.append(fill)
}