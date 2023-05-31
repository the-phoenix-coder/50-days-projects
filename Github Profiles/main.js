const API = "https://api.github.com/users/"
const main = document.querySelector('.main')
const input = document.querySelector('input')

async function user(name)
{
    const res = await fetch(API + name)
    const data = await res.json()
    if (data.message === 'Not Found')
    {
        main.innerHTML = `<h1>No Data To Show</h1>`
    } else
    {
        const respons = await fetch(API + name + '/repos')
        const repos = await respons.json()
        const content = `
            <div class='container even-column'>
                <figure><img src='${data.avatar_url}' /></figure>
                <div class='content'>
                    <h1>${data.name}</h1>
                    <p>${data.bio}</p>
                    <div class='even-column stats'>
                        <div class='followers'>${data.followers} Followers</div>
                        <div class='following'>${data.following} Following</div>
                        <div class='repos'>${data.public_repos} Repos</div>
                    </div>
                    <div class='reposName even-column'></div>
                </div>
            </div>
        `
    
        main.innerHTML = content
        
        repos
            .slice(0, 5)
            .reverse()
            .forEach(repo =>
            {
                const repoName = document.createElement('span')
                const repoLink = document.createElement('a')
                repoLink.href = repo.html_url
                repoLink.target = '_blank'
                repoLink.innerText = repo.name
                repoName.innerHTML = repoLink.innerText
                document.querySelector('.reposName').append(repoName)
            })
    }
}

document.onkeyup = (e) =>
{
    if (e.key === 'Enter')
    {
        main.innerHTML = ''
        main.style.display = 'flex'
        user(input.value)
        input.value = ''
    }
}