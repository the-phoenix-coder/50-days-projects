const h = document.querySelector('h1')
const speed = document.querySelector('input')

let text = "I Love Programming"
let count = 1
let fast = 300 / speed.value

function texting()
{
    if (count < text.length)
    {
        h.innerHTML = text.slice(0, count+1)
        count++
    } else
    {
        count = 1
    }
    setTimeout(texting, fast)
}

texting()


speed.addEventListener('input', (e) => fast = 300 / e.target.value)