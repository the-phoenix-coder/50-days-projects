const link = "https://randomuser.me/api?results=50"
const input = document.querySelector('input')
const result = document.querySelector('.results')

const items = []

getData()

input.addEventListener('input', e => filter(e.target.value))

async function getData()
{
    const res = await fetch(link)
    const { results } = await res.json()
    result.innerHTML = ''

    results.forEach(person =>
    {
        const li = document.createElement('li')
        items.push(li)
        li.innerHTML = `
            <img src="${person.picture.large}"  alt='${person.name.first}'>
            <div class='info'>
                <h4>${person.name.first} ${person.name.last}</h4>
                <p>${person.location.city}, ${person.location.country}</p>
            </div>
        `
        result.appendChild(li)
    })
}

function filter(key)
{
    items.forEach(item =>
    {
        if (item.innerText.toLowerCase().includes(key.toLowerCase()))
        {
            item.classList.remove('hide')
        } else
        {
            item.classList.add('hide')
        }
    })
}