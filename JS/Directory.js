const DIRECTORY = [
    {
        image  : '/Assets/Officers/QA.jpg',
        name : 'Rene Jr. P. Amantillo',
        position: 'Quality Assurance Manager',
        nickname : 'Rjr',
        rank: 'CORE',
        socials : {
            facebook : {socialsLink: 'https://www.facebook.com/share/1B7zLG324i/', username: 'Rjr Amantillo'},
            instagram : {socialsLink: 'https://www.instagram.com/smmrg55?igsh=MWU1b3QwaTM2Nmtqdg==', username: '@smmrg5'},
            x : {socialsLink: 'https://x.com/rjra8?t=534i7WXXsqugP8d3n58cfQ&s=09', username: '@rjra8'},
        }
    },
    {
        image  : '/Assets/Officers/AQA.jpg',
        name : 'Niño Jan Michael O. Bautista',
        position: 'Assistance Quality Assurance Manager',
        nickname : 'Nins',
        rank: 'CORE',
        socials : {
            facebook : {socialsLink: 'https://www.facebook.com/share/1CSKpsM5QT/?mibextid=wwXIfr', username: 'Niño Jan Michael Bautista '},
        }
    },
    {
        image  : '/Assets/Officers/FM.jpg',
        name : 'Irrah B. Lanaban',
        position: 'Finance Manager',
        nickname : 'Ai',
        rank: 'CORE',
        socials : {
            instagram : {socialsLink: 'https://www.instagram.com/lanabanaiai', username: '@lanabanaiai'},
        }
    },
    {
        image  : '/Assets/Officers/AcadsOTL.jpg',
        name : 'Gene Keannu Miguel S. Kinazo',
        position: 'Academics Operations Team Leader',
        nickname : 'Gene • Kian • Miggy',
        rank: 'TEAM LEADER',
        socials : {
            facebook : {socialsLink: 'https://facebook.com/juxtgene', username: 'Gene Kinazo'},
        }
    },
    {
        image  : '/Assets/Officers/AcadsCTL.jpg',
        name : 'Bonna Mae S. Ruales',
        position: 'Academics Compliance Team Leader',
        nickname : 'Bon',
        rank: 'TEAM LEADER',
        socials : {
            instagram : {socialsLink: 'https://www.instagram.com/bonnnn_m?igsh=MWk1NjNkOWxmMng5ag%3D%3D&utm_source=qr', username: '@bonnnn_m'},
        }
    },
    {
        image  : '/Assets/Officers/EnviOTL.jpg',
        name : 'Ashley L. Bagnol',
        position: 'Environment Operations Team Leader',
        nickname : 'Ash',
        rank: 'TEAM LEADER',
        socials : {
            instagram : {socialsLink: 'https://www.instagram.com/ashnaruse_/', username: '@ashnaruse_'},
        }
    },
    {
        image  : '/Assets/Officers/CD1.jpg',
        name : 'Niña Elizabeth G. Maglasang',
        position: 'Communications Director',
        nickname : 'Nema',
        rank: 'PROJECT HEAD',
        socials : {
            facebook : {socialsLink: 'https://www.facebook.com/share/1CmuupKrU2/?mibextid=wwXIfr', username: 'Niña Elizabeth Maglasang '},
            instagram : {socialsLink: 'https://www.instagram.com/ninanonymouss?igsh=MWk4c3Uxc2dwbXhqeg%3D%3D&utm_source=qr', username: '@ninanonymouss'},
        }
    },
    {
        image  : '/Assets/Officers/CD2.jpg',
        name : 'Jan Marynoie R. Barcebal',
        position: 'Communications Director',
        nickname : 'Jam',
        rank: 'PROJECT HEAD',
        socials : {
            facebook : {socialsLink: 'https://wwww.facebook.com/lovepriestes', username: 'Jan Marynoie Barcebal'},
            instagram : {socialsLink: 'https://wwww.instagram.com/potassiumpermerianganate ', username : '@potassiumpermerianganate'},
        }
    },
];

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

THE_OFFICERS.innerHTML = `<h2 class="the-officers-heading">The Officers</h2>${content}
`

function directoryToClass(position) {
    let key = {
        'Chairperson' : 'cp',
        'Executive Director' : 'ed',
        'Operations Manager' : 'om',
        'Quality Assurance Manager' : 'qa',
        'Assistance Quality Assurance Manager' : 'aqa',
        'Finance Manager' : 'fm',
        'Assistance Finance Manager' : 'afm',
        'Communications Director' : 'cd',
        'Membership Director' : 'md',
        'Technical Director' : 'td',
        'PodCARES Director' : 'podcares',
        'Property Custodians' : 'pc',
        'Community Operations Team Leader' : 'commu-otl',
        'Community Compliance Team Leader' : 'commu-ctl',
        'Community Operations Team Leader' : 'commu-otl',
        'Academics Operations Team Leader' : 'acad-otl',
        'Academics Compliance Team Leader' : 'acad-ctl',
        'Religious Operations Team Leader' : 'relig-otl',
        'Religious Compliance Team Leader' : 'relig-ctl',
        'Environment Operations Team Leader' : 'envi-otl',
        'Environment Compliance Team Leader' : 'envi-ctl',
        'Sociocultural Operations Team Leader' : 'socio-otl',
        'Sociocultural Compliance Team Leader' : 'socio-ctl',
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