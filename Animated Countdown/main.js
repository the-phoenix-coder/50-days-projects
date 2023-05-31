const counter = document.querySelector('.counter')
const nums = document.querySelectorAll('.nums span')
const over = document.querySelector('.over')
const replay = document.querySelector('button')

runAnimation()

function resetCounter()
{
    counter.classList.remove('hide')
    over.classList.remove('show')

    nums.forEach(num => num.classList.value = '')
    nums[0].classList.add('current')
}
function runAnimation()
{
    nums.forEach((num, i) =>
    {
        const next = nums.length - 1

        num.addEventListener('animationend', e =>
        {
            if (e.animationName === 'currenting' && i !== next)
            {
                num.classList.remove('current')
                num.classList.add('goOut')
            } else if (e.animationName === 'goOut' && num.nextElementSibling)
            {
                num.nextElementSibling.classList.add('current')
            } else
            {
                counter.classList.add('hide')
                over.classList.add('show')
            }
        })
    })
}
replay.addEventListener('click', () =>
{
    resetCounter()
    runAnimation()
})