const btn = document.querySelector('button')
const container = document.querySelector('.toasts')

btn.addEventListener('click', () =>
{
    createToast()
})


const words = ['One', 'Two', 'Three', 'Four']
const colors = ['Succes', 'Warning', 'Error']

function createToast()
{
    const toast = document.createElement('div')
    toast.classList.add('toast')

    let random = Math.floor(Math.random() * words.length)
    let randomClr = Math.floor(Math.random() * colors.length)
    let clrState = colors[randomClr]

    toast.append(`Message ${words[random]}`)
    if (clrState === 'Succes')
    {

        toast.style.color = 'green'

    } else if (clrState === 'Error')
    {
        
        toast.style.color = 'red'

    }
    container.append(toast)
    setTimeout(() => toast.remove(), 3000)
}