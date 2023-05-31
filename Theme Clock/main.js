const toggleBtn = document.querySelector('button')
const hourHand = document.querySelector('.hours-hand')
const minuteHand = document.querySelector('.minutes-hand')
const secondHand = document.querySelector('.seconds-hand')
const numberClock = document.querySelector('h1')
const paraDate = document.querySelector('p')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

setInterval(program, 1000);

let dark = false

toggleBtn.addEventListener('click', () =>
{
    document.body.classList.toggle('active')
    dark = !dark
    mood()
})

mood()

function mood()
{
    if (dark == true)
    {
        toggleBtn.innerText = 'Light Mood'
    } else
    {
        toggleBtn.innerText = 'Dark Mood'
    }
}

function timing() {
    const date = new Date()
    const day = date.getDay()
    const month = date.getMonth()
    const num = date.getDate()
    paraDate.innerHTML = `${days[day]}, ${months[month]} <span>${num}</span>`
}

function clock()
{
    const date = new Date()
	const seconds = date.getSeconds() / 60
	const minutes = (seconds + date.getMinutes()) / 60
	const hours = (minutes + date.getHours()) / 12
    let period
    
    if (date.getHours() >= 12)
    {
        period = 'PM'
    } else
    {
        period = 'AM'
    }

    rotation(hourHand, hours)
    rotation(minuteHand, minutes)
    rotation(secondHand, seconds)

    let theTime = `${date.getHours() >= 13 ? date.getHours() % 12 : date.getHours()}:${date.getMinutes()} ${period}`
    numberClock.innerText = theTime
}
function rotation(hand, deg)
{
    hand.style.setProperty('--rotation', deg * 360)
}
function program()
{
    clock()
    timing()
}

program()