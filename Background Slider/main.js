const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const imgs = [
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
    "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
    "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"]


let current = 0   

prev.addEventListener('click', goPrev)
next.addEventListener('click', goNext)

changeImage()

function goPrev()
{
    if (current > 0)
    {
        current--
    } else
    {
        current = imgs.length - 1
    }
    changeImage()
}
function goNext()
{
    if (current < imgs.length - 1)
    {
        current++
    } else
    {
        current = 0
    }
    changeImage()
}
function changeImage()
{
    document.body.style.backgroundImage = `URL(${imgs[current]})`
    document.querySelector('.slider').style.backgroundImage = `URL(${imgs[current]})`
}