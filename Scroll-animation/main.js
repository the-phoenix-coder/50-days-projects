const boxs = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes()
{
    const depth_range = window.innerHeight

    boxs.forEach(box =>
    {
        const box_top = box.getBoundingClientRect().top
        if (box_top < depth_range)
        {
            box.classList.add('show')
        } else
        {
            box.classList.remove('show')
        }
    })
}