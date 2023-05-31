const divs = document.querySelectorAll('.container div')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

divs.forEach(div => div.addEventListener('mouseover', () => setColor(div)))
divs.forEach(div => div.addEventListener('mouseout', () => removeColor(div)))

function setColor(div)
{
    let color = random()
    div.style.background = color
    div.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(div)
{
    div.style.background = '#333'
    div.style.boxShadow = `0 0 2px #000`
}
function random()
{
    return colors[Math.floor(Math.random() * colors.length)]
}