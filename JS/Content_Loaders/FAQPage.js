import { CONTENT } from "./Content.js"

const DATALISTS = {
    GeneralQuestions : document.querySelector('#GeneralQuestions'),
    CommunityQuestions : document.querySelector('#CommunityQuestions'),
    AcademicsQuestions : document.querySelector('#AcademicsQuestions'),
    ReligiousQuestions : document.querySelector('#ReligiousQuestions'),
    EnvironmentQuestions : document.querySelector('#EnvironmentQuestions'),
    SocioculturalQuestions : document.querySelector('#SocioculturalQuestions'),
    PodCARESQuestions : document.querySelector('#PodCARESQuestions'),
}

const CATEGORY_SET = document.querySelector('.category-set');

const QUESTIONS = CONTENT.FAQPage.Questions

QUESTIONS.General
        .forEach((qr,index) => {
                DATALISTS.GeneralQuestions
                    .innerHTML += `<option value="${qr.question}"></option>`
                CATEGORY_SET.querySelector(`.question-scroll.general`)
                    .innerHTML += `<article class="question-container" tabindex="-1" onclick="this.focus()" style="order : 0;"  id="GeneralQuestion${index}">
                                        <h2 class="question">
                                            ${qr.question}
                                        </h2>
                                        <div class="response">
                                            ${qr.response}
                                        </div>
                                    </article>`
        })
QUESTIONS.Community
        .forEach((qr,index) => {
                DATALISTS.CommunityQuestions
                    .innerHTML += `<option value="${qr.question}"></option>`
                CATEGORY_SET.querySelector(`.question-scroll.community`)
                    .innerHTML += `<article class="question-container" tabindex="-1" onclick="this.focus()" style="order : 0;"  id="CommunityQuestion${index}">
                                    <h2 class="question">${qr.question}</h2>
                                    <div class="response">${qr.response}</div>
                                    </article>`
        })
QUESTIONS.Academics
        .forEach((qr,index) => {
                DATALISTS.AcademicsQuestions
                    .innerHTML += `<option value="${qr.question}"></option>`
                CATEGORY_SET.querySelector(`.question-scroll.academics`)
                    .innerHTML += `<article class="question-container" tabindex="-1" onclick="this.focus()" style="order : 0;"  id="AcademicsQuestion${index}">
                                    <h2 class="question">${qr.question}</h2>
                                    <div class="response">${qr.response}</div>
                                    </article>`
        })
QUESTIONS.Religious
        .forEach((qr,index) => {
                DATALISTS.ReligiousQuestions
                    .innerHTML += `<option value="${qr.question}"></option>`
                CATEGORY_SET.querySelector(`.question-scroll.religious`)
                    .innerHTML += `<article class="question-container" tabindex="-1" onclick="this.focus()" style="order : 0;"  id="ReligiousQuestion${index}">
                                    <h2 class="question">${qr.question}</h2>
                                    <div class="response">${qr.response}</div>
                                    </article>`
        })
QUESTIONS.Environment
        .forEach((qr,index) => {
            DATALISTS.EnvironmentQuestions
                    .innerHTML += `<option value="${qr.question}"></option>`
                CATEGORY_SET.querySelector(`.question-scroll.environment`)
                    .innerHTML += `<article class="question-container" tabindex="-1" onclick="this.focus()" style="order : 0;"  id="EnvironmentsQuestion${index}">
                                    <h2 class="question">${qr.question}</h2>
                                    <div class="response">${qr.response}</div>
                                    </article>`
        })
QUESTIONS.Sociocultural
        .forEach((qr,index) => {
                DATALISTS.SocioculturalQuestions
                    .innerHTML += `<option value="${qr.question}"></option>`
                CATEGORY_SET.querySelector(`.question-scroll.sociocultural`)
                    .innerHTML += `<article class="question-container" tabindex="-1" onclick="this.focus()" style="order : 0;"  id="SocioculturalQuestion${index}">
                                    <h2 class="question">${qr.question}</h2>
                                    <div class="response">${qr.response}</div>
                                    </article>`
        })
QUESTIONS.PodCARES
        .forEach((qr,index) => {
                DATALISTS.PodCARESQuestions
                    .innerHTML += `<option value="${qr.question}"></option>`
                CATEGORY_SET.querySelector(`.question-scroll.podcares`)
                    .innerHTML += `<article class="question-container" tabindex="-1" onclick="this.focus()" style="order : 0;" id="PodCARESQuestion${index}">
                                    <h2 class="question">${qr.question}</h2>
                                    <div class="response">${qr.response}</div>
                                    </article>`
        })