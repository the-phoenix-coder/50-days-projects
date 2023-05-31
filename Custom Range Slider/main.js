const range = document.getElementById('range')
const label = document.querySelector('label')

range.addEventListener('input', e =>
{
    label.innerHTML = e.target.value
    const width = +e.target.value
    label.style.left = width - 16 +'%'
})