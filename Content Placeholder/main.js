const firstImg = 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
const secondImg = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
const titleTxt = 'Lorem ipsum dolor sit amet'
const infoTxt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
const nameTxt = 'Ahmed Hesham'
const dateTxt = 'OCT 10, 1998'

const mainImg = document.getElementById('header-img')
const title = document.getElementById('title')
const info = document.getElementById('info')
const avatarImg = document.getElementById('avatar-img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const bgs = document.querySelectorAll('.bg')
const bgstxt = document.querySelectorAll('.bg-text')

setTimeout(fillData, 2500)

function fillData()
{
    mainImg.innerHTML = `
    <img src="${firstImg}" />
    `
    title.innerText = titleTxt
    info.innerText = infoTxt

    avatarImg.innerHTML = `
    <img src="${secondImg}" />
    `
    name.innerText = nameTxt
    date.innerText = dateTxt
    bgs.forEach(bg => bg.classList.remove('bg'))
    bgstxt.forEach(bg => bg.classList.remove('bg-text'))
}
