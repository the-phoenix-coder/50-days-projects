const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')
const opens = document.querySelectorAll('.nav')
openBtn.addEventListener('click', () =>
{
    opens.forEach(open => open.classList.add('open'))
})
closeBtn.addEventListener('click', () =>
{
    opens.forEach(open => open.classList.remove('open'))
})