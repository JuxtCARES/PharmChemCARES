import { CONTENT } from "./Content_Loaders/Content.js";

const CATEGORIES = {
    General : document.querySelector('.category.general'),
    Community : document.querySelector('.category.community'),
    Academics : document.querySelector('.category.academics'),
    Religious : document.querySelector('.category.religious'),
    Environment : document.querySelector('.category.environment'),
    Sociocultural : document.querySelector('.category.sociocultural'),
    PodCARES : document.querySelector('.category.podcares'),
}

const SEARCH = document.querySelector('#SearchBox');

const SUBMIT = document.querySelector('#SubmitQuery');

const FAQ_SET = document.querySelector('.faq-questions');

const CATEGORY_SET = document.querySelector('.category-set');


let currentCategory = 'General'

Object.entries(CATEGORIES).forEach(entry => {
    entry[1].addEventListener('click', e => {
        SEARCH.setAttribute('list', `${entry[0]}Questions`)

        currentCategory = entry[0];
        FAQ_SET.dataset.category = entry[0];
        Array.from(CATEGORY_SET.querySelectorAll(`.question-scroll.${entry[0].toLowerCase()} .question-container`))
            .forEach(questionContainer => {
                questionContainer.style = 'order: 0;'
            })
    })
})

SEARCH.addEventListener('change', e => {
    CompareText(SEARCH.value)
})

SUBMIT.addEventListener('click', e => {
    CompareText(SEARCH.value)
    
})

function CompareText(query) {
    console.log(query, currentCategory);
    let queryTokens = new Set(query.split(' '))
    let questions = QUESTIONS[currentCategory];
    let questionScores = [];

    questions.forEach((qr, index) => {
        let score = 0;
        qr.question.split(' ')
            .forEach(questionToken => {
                if (queryTokens.has(questionToken)) score++
            })

        questionScores[index] = score;
    })

    console.log(questionScores)

    //sort question scores 
    questionScores.forEach((score, index) => {
        document.querySelector(`#${currentCategory}Question${index}`).style = `order : ${score}`
    })
}