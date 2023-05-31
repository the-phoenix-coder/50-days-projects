const input = document.querySelector('input')
const boxs = document.querySelector('.container')

let arr

if (localStorage.getItem('task'))
{
    arr = JSON.parse(localStorage.getItem('task'))
} else arr = []

fromLocal()

document.querySelector('form').addEventListener('submit', (e) =>
{
    e.preventDefault()
    if (input.value != '')
    {
        createTask(input.value)
        input.value = ''
        input.focus()
    }
})

window.onload = () =>
{
    input.focus()
}

boxs.addEventListener('click', e =>
{
    if (e.target.classList.contains('del'))
    {
        deleted(e.target.parentElement.dataset.id)
        e.target.parentElement.remove()
    }
})
boxs.addEventListener('click', e =>
{
    if (e.target.classList.contains('box'))
    {
        completed(e.target.dataset.id)
        e.target.classList.toggle('checked')
    }
})

function createTask(txt)
{
    let data = {
        id: Date.now(),
        name: txt,
        complete: false
    }
    arr.push(data)
    showTask(arr)
    addToLocalStorage(arr)
}

function showTask(arr)
{
    boxs.innerHTML = ''
    arr.forEach(task =>
    {
        let box = document.createElement('div')
        box.classList.add('box')
        box.setAttribute('data-id', task.id)
        box.append(document.createTextNode(task.name))
        
        let del = document.createElement('span')
        del.classList.add('del')
        del.append(document.createTextNode('delete'))
        box.append(del)
        boxs.appendChild(box)
    })
}


function addToLocalStorage(arr)
{
    localStorage.setItem('task', JSON.stringify(arr))
}

function fromLocal()
{
    let data = localStorage.getItem('task')
    if (data)
    {
        let tasks = JSON.parse(data)
        showTask(tasks)
    }
}

function deleted(id)
{
    arr = arr.filter(task => task.id != id)
    addToLocalStorage(arr)
}
function completed(id)
{
    arr.forEach(task =>
    {
        if (task.id == id)
        {
            task.complete = !task.complete
        }
    })
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i].id == id)
        {
            arr[i].complete == false ? (arr[i].complete = true) : (arr[i].complete = false)
        }
    }
    addToLocalStorage(arr)
}