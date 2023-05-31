const btns = document.querySelectorAll('button')

btns.forEach(btn =>
{
    btn.addEventListener('click', e =>
    {
        const x = e.pageX
        const y = e.pageY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const animated = document.createElement('span')
        animated.classList.add('animated')

        animated.style.top = `${yInside}px`
        animated.style.left = `${xInside}px`

        btn.appendChild(animated)

        setTimeout(() => animated.remove(), 500)
    })
})