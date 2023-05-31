const numbers = document.querySelectorAll('h1')

window.addEventListener('load', () =>
    numbers.forEach(number =>
            setInterval(() =>
                number.dataset.goal > +number.innerText ?
                    number.innerText = +number.innerText + 100 : '0')))