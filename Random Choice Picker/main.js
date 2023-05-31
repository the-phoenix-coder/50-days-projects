const input = document.querySelector('textarea')
const words = document.querySelector('.words')

input.focus()

input.addEventListener('keyup', (e) => {
    const values = e.target.value.split(',').filter(value => value.trim())
    words.innerHTML = ''

    values.forEach(value => {
        const word = document.createElement('div')
        word.innerHTML = value
        words.append(word)
    })

    const interval = setInterval(() =>
    {
        if (e.key == 'Enter')
        {
            input.value = ''

            const index = Math.floor(Math.random() * words.querySelectorAll('div').length)
            
            words.querySelectorAll('div')[index].classList.add('active')
            
            setTimeout(() => {
                words.querySelectorAll('div')[index].classList.remove('active')
            }, 100);
        }
    }, 100)
    setTimeout(() =>
    {
        clearInterval(interval)
    }, 3000)
})