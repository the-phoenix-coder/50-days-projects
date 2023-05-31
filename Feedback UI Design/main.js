const container = document.querySelector(".container")
const rates = document.querySelectorAll('.rate')
const rateContainer = document.querySelector('.rating-container')
const btn = document.querySelector("button")

let text = 'Satisfied'

rates.forEach(rate =>
{
    rate.addEventListener('click', () =>
    {
        removeActive()
        rate.classList.add('active')
        text = rate.children[1].innerHTML
    })
})

btn.addEventListener('click', () =>
{
    container.innerHTML = `
    <svg fill='red' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
    <p>Thank You!</p>
    <h5 >Feedback: ${text}</h5>
    <p>We'll use your feedback to improve our <br> customer support</p>
    `
})

function removeActive()
{
    rates.forEach(rate => rate.classList.remove('active'))
}