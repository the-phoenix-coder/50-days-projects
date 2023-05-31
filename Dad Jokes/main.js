const btn = document.querySelector('button')
const joke = document.querySelector('h1')
const link = 'https://icanhazdadjoke.com'

btn.addEventListener('click', generateJoke)

async function generateJoke() {
const config = {
    headers: {
        Accept: 'application/json',
    },
}
    fetch('https://icanhazdadjoke.com', config)
        .then(res => res.json())
        .then(data => joke.innerHTML = data.joke)
}