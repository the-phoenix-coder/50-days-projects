const container = document.querySelector('.container')
const link = 'https://source.unsplash.com/random/'

const rows = 5

for (let i = 0; i < rows * 3; i++)
{
    const img = document.createElement('img')
    img.src = link + imgSize()
    container.append(img)
}

function imgSize()
{
    return getRandom()*getRandom()
}

function getRandom()
{
    return Math.floor(Math.random() * 10) + 300
}