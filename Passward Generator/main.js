const passwordEl = document.querySelector('.password')
const iconEl = document.querySelector(".icon")
const lengthEl = document.querySelector('input[type=number]')
const upperEl = document.getElementById('uppercase')
const lowerEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const button = document.querySelector('button')

const random = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymobl
}

iconEl.addEventListener('click', () =>
{
    navigator.clipboard.writeText(resultEl.innerText)
})

button.addEventListener('click', () =>
{
    const length = +lengthEl.value
    const isLower = lowerEl.checked
    const isUpper = upperEl.checked
    const isNumber = numbersEl.checked
    const isSymbol = symbolsEl.checked
    passwordEl.innerText = generatePassword(isLower, isUpper, isNumber, isSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length)
{
    let generatedPassword = ''
    const mix = lower + upper + number + symbol
    const mixArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])
    if (mix === 0)
    {
        return ''
    }
    for (let i = 0; i < length; i += mix)
    {
        mixArr.forEach(type =>
        {
            const name = Object.keys(type)[0]
            generatedPassword += random[name]()
        })
    }
    const password = generatedPassword.slice(0, length)
    return password
}

function getRandomUpper()
{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomLower()
{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber()
{
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymobl()
{
    const symbols = '!@#$%^&*()_+{}><?/\|-,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}