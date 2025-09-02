import { CONTENT } from "./Content.js";

const DIRECTORY = CONTENT.LandingPage.Officers

const THE_OFFICERS = document.querySelector('#TheOfficers .directory-scroll');

let content = ''

DIRECTORY.forEach(officer => {
    content += `<article class="officer ${directoryToClass(officer.position)}">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="${officer.image}" alt="PharmChem CARES ${officer.position}" class="officer-image">
                        </div>
                        <div class="flip-card-back">
                            <h2 class="rank">${officer.rank}</h2>
                            <h3 class="name">${officer.name}</h3>
                            <span class="position">${officer.position}</span>
                            <span class="nickname">${officer.nickname}</span>
                            ${makeSocials(officer.socials)}
                        </div>
                    </div>
                </div>
            </article>`
})

THE_OFFICERS.innerHTML = `${content}
`

function directoryToClass(position) {
    let key = {
        'Chairperson' : 'cp', //done
        'Executive Director' : 'ed', //done
        'Operations Manager' : 'om', //partial
        'Quality Assurance Manager' : 'qa', //done
        'Assistant Quality Assurance Manager' : 'aqa', //done
        'Finance Manager' : 'fm', //done
        'Assistant Finance Manager' : 'afm', //done
        'Community Operations Team Leader' : 'commu-otl', //done
        'Community Compliance Team Leader' : 'commu-ctl', //done
        'Academics Operations Team Leader' : 'acad-otl', //done
        'Academics Compliance Team Leader' : 'acad-ctl', //done
        'Religious Operations Team Leader' : 'relig-otl', //done
        'Religious Compliance Team Leader' : 'relig-ctl', //done
        'Environment Operations Team Leader' : 'envi-otl', //done
        'Environment Compliance Team Leader' : 'envi-ctl', //done
        'Sociocultural Operations Team Leader' : 'socio-otl', //done
        'Sociocultural Compliance Team Leader' : 'socio-ctl', //done
        'Communications Director' : 'cd', //done
        'Membership Director' : 'md', //done
        'Technical Director' : 'td', //done
        'PodCARES Director' : 'podcares', //done
        'Property Custodian' : 'pc', //done
    }

    return key[position]
} 

function makeSocials(socialsObject) {
    return Object.keys(socialsObject).map(key => {
        switch (key) {
            case 'x':
                return `<a class="contact" href="${socialsObject[key].socialsLink}"><i class="fa-brands fa-x-twitter"></i></a>`
            case 'facebook':
                return `<a class="contact" href="${socialsObject[key].socialsLink}"><i class="fa-brands fa-facebook"></i></a>`
            case 'instagram':
                return `<a class="contact" href="${socialsObject[key].socialsLink}"><i class="fa-brands fa-instagram"></i></a>`
        }
    }).join('')
}