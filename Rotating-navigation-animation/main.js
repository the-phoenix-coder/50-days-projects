const openBtn = document.querySelector('.btns-container .open svg')
const closeBtn = document.querySelector('.btns-container .close svg')
const container = document.querySelector('.container')

openBtn.addEventListener('click', () => container.classList.add('show-nav'))

closeBtn.addEventListener('click', () => container.classList.remove('show-nav'))