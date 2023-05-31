const checks = document.querySelectorAll('.check-box')
const good = checks[0]
const cheap = checks[1]
const fast = checks[2]

checks.forEach(check => check.addEventListener('click', e =>
{
    let selected = e.target
    if (good.checked && cheap.checked && fast.checked)
    {
        if (good === selected)
        {
            fast.checked = false
        }
        if (cheap === selected)
        {
            good.checked = false
        }
        if (fast === selected)
        {
            cheap.checked = false
        }
    }
}))