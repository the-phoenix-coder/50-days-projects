const container = document.querySelector('.container')
window.onkeydown = (e) => {
    const value = e.key
    const code = e.keyCode
    const title = `Key${value.toUpperCase()}`
    container.classList.add('active')
    document.querySelector('.pressed').innerHTML = value
    document.querySelector('.code').innerHTML = code
    document.querySelector('.title').innerHTML = title
}