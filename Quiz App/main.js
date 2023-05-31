const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const container = document.querySelector('.container')
const quizTxt = document.querySelector('.quiz-text')
const answers = document.querySelectorAll('.answer')
const a_text = document.querySelector('.a-text')
const b_text = document.querySelector('.b-text')
const c_text = document.querySelector('.c-text')
const d_text = document.querySelector('.d-text')
const btn = document.querySelector('button')

let currentQuiz = 0
let result = 0

loadQuiz()

function loadQuiz()
{
    unselect()

    const currentData = quizData[currentQuiz]

    quizTxt.innerText = currentData.question
    a_text.innerText = currentData.a
    b_text.innerText = currentData.b
    c_text.innerText = currentData.c
    d_text.innerText = currentData.d
}

function unselect()
{
    answers.forEach(answer => answer.checked = false)
}

function getSelected()
{
    let answer
    answers.forEach(el =>
    {
        if (el.checked)
        {
            answer = el.id
        }
    })
    return answer
}

btn.addEventListener('click', () =>
{
    const answer = getSelected()
    if (answer)
    {
        if (answer === quizData[currentQuiz].correct)
        {
            result++
        }
        currentQuiz++
        if (currentQuiz < quizData.length)
        {
            loadQuiz()
        } else
        {
            container.innerHTML = `
                <h2>You answered ${result} / ${quizData.length} questions correctly</h2>

                <button onclick='location.reload()'>Reload</button>
            `
        }
    }
})