const Api_Link = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const container = document.querySelector('.container')

getData(Api_Link)


async function getData(url)
{
    const res = await fetch(Api_Link)
    const data = await res.json()
    data.results.map(movie =>
    {       
        const { title, poster_path, vote_average, overview } = movie
        const card = document.createElement('div')
        card.classList.add('movie')

        card.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}" >
            <div class='col'>
                <h4 class='title'>${title}</h4>
                <div class='rate'>${vote_average}</div>
            </div>
            <div class='overview'>
                <h4>Overview</h4>
                ${overview}
            </div>
        `
        container.appendChild(card)
    })
}