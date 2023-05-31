const labels = document.querySelectorAll('label')
const inputs = document.querySelectorAll('input')

labels.forEach(label => {
    label.innerHTML = label.innerHTML
    .split('')
    .map((char, index) => `<span style="transition-delay:${index * 50}ms">${char}</span>`)
    .join('')
})

inputs.forEach(input =>
{
    input.addEventListener('click', () =>
    {
        input.classList.add('active')
    })
    input.addEventListener('blur', () =>
    {
        if (input.value)
        {
            true
        } else
        {
            input.classList.remove('active')
        }
    })
})