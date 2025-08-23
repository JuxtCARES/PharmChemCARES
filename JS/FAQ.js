const SETTINGS = {
    enableWordCount : true,
    enableFuzzy : true,
    fuzzyTolerance : 2
}

const QUESTIONS = [
    {
        question: `Does CARES care about it's WorkComm?`,
        response: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium similique ipsam eveniet, perspiciatis optio odio ratione deserunt sequi magni modi dolores quos fuga eligendi officiis dolor maiores possimus impedit.`
    },
    {
        question: `What is the role of the working committee?`,
        response: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium similique ipsam eveniet, perspiciatis optio odio ratione deserunt sequi magni modi dolores quos fuga eligendi officiis dolor maiores possimus impedit.`
    },
    {
        question: `How often does the working committee meet?`,
        response: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium similique ipsam eveniet, perspiciatis optio odio ratione deserunt sequi magni modi dolores quos fuga eligendi officiis dolor maiores possimus impedit.`
    },
    {
        question: `How are members of the working committee selected?`,
        response: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium similique ipsam eveniet, perspiciatis optio odio ratione deserunt sequi magni modi dolores quos fuga eligendi officiis dolor maiores possimus impedit.`
    },
    {
        question: `Can general members attend working committee meetings?`,
        response: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium similique ipsam eveniet, perspiciatis optio odio ratione deserunt sequi magni modi dolores quos fuga eligendi officiis dolor maiores possimus impedit.`
    },
    {
        question: `How can I raise an issue or suggestion to the working committee?`,
        response: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium similique ipsam eveniet, perspiciatis optio odio ratione deserunt sequi magni modi dolores quos fuga eligendi officiis dolor maiores possimus impedit.`
    },
]
const FAQ_LIST = document.querySelector('#FAQList')

QUESTIONS.forEach(faq => {
    FAQ_LIST.innerHTML += ` <li class="faq-item">
                                <article class="faq">
                                    <h2 class="faq-question">${faq.question}</h2>
                                    <p class="faq-response">${faq.response}</p>
                                </article>
                            </li>`
})

const LIST_QUESTION_ELEMENTS = Array.from(document.querySelectorAll('.faq'))

LIST_QUESTION_ELEMENTS.forEach(faqItem => {
    faqItem.addEventListener('click', e => {
        if (faqItem.querySelector('.faq-response').classList.contains('expanded')) {
            faqItem.querySelector('.faq-response').classList.remove('expanded')
        } else {
            Array.from(document.querySelectorAll('.faq-response')).forEach(response => {
                response.classList.remove('expanded')
            })
            
            faqItem.querySelector('.faq-response').classList.add('expanded')
        }
    })
})

function LevenshteinDistance(m, n) {
    return new Levenshtein(m, n).distance
}

function FuzzyScore(word, queryText) {
    let minDistance = Infinity
    let queryWords = queryText.split(' ')

    queryWords.forEach(qWord => {
        let distance = LevenshteinDistance(word, qWord)
        if (distance < minDistance) {
            minDistance = distance
        }
    })

    if (minDistance === 0) {
        return 3
    } else if (minDistance <= SETTINGS.fuzzyTolerance) {
        return 1
    } else {
        return 0
    }
}

function ComputeScore(question, searchWords) {
    let score = 0;
    let qText = question.toLowerCase()

    let basicFilter = 0;
    searchWords.forEach(sw => {
        if (qText.includes(sw)) {
            basicFilter++
        }
    })
    if (basicFilter === 0) return 0

    if (SETTINGS.enableWordCount) {
        searchWords.forEach(sw => {
            if (qText.startsWith(sw)) {
                score += 3
            } else if (qText.includes(sw)) {
                score += 2
            }
        })
    }

    if (SETTINGS.enableFuzzy) {
        searchWords.forEach(sw => {
            score += FuzzyScore(sw, qText)
        })
    }

    return score
}

function SearchFAQ(searchQuery) {
    let searchWords = searchQuery.split(' ')
    let results = []
    
    LIST_QUESTION_ELEMENTS.forEach(question => {
        let score = ComputeScore(question.querySelector('.faq-question').textContent, searchWords)
        if (score > 0) {
            question.dataset.score = score;
        } else {
            question.dataset.score = 0;
        }
        results.push(question)
    })

    return results.sort((a, b) => {
        let A = parseInt(a.dataset.score);
        let B = parseInt(b.dataset.score);

        return B - A
    })
}

const SEARCH = document.querySelector('#FAQSearch')

SEARCH.addEventListener('change', e => {
    QUESTIONS.forEach(faq => {
        FAQ_LIST.innerHTML = ''
        FAQ_LIST.innerHTML += ` <li class="faq-item">
                                    <article class="faq">
                                        <h2 class="faq-question">${faq.question}</h2>
                                        <p class="faq-response">${faq.response}</p>
                                    </article>
                                </li>`
    })

    let results = SearchFAQ(SEARCH.value)
    let resultElements = document.createDocumentFragment()

    results.forEach(res => {
        let listItem = document.createElement('li')
        listItem.classList.add('faq-item')
        listItem.appendChild(res.cloneNode(true))
        resultElements.append(listItem)
    })

    FAQ_LIST.innerHTML = '';
    FAQ_LIST.appendChild(resultElements)

    Array.from(FAQ_LIST.querySelectorAll('.faq')).forEach(faqItem => {
        faqItem.addEventListener('click', e => {
            if (faqItem.querySelector('.faq-response').classList.contains('expanded')) {
                faqItem.querySelector('.faq-response').classList.remove('expanded')
            } else {
                Array.from(document.querySelectorAll('.faq-response')).forEach(response => {
                    response.classList.remove('expanded')
                })
                
                faqItem.querySelector('.faq-response').classList.add('expanded')
            }
        })
    })
})