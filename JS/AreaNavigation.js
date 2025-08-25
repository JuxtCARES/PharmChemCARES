const AREA_SELECTOR = document.querySelector('#NavigateAreas');
const DEFAULT = AREA_SELECTOR.querySelector('option');

DEFAULT.selected = true

AREA_SELECTOR.addEventListener('change', e => {
    let { value } = e.target;
    let redirectTo = `/Subpages/${value}.html`

    window.location.href = redirectTo;
})

const AREA_DISPLAY = Array.from(document.querySelectorAll('.areas-container'))

AREA_DISPLAY.forEach(area => {
    area.addEventListener('click', e => {
        if (e.target.classList.contains('community')) {
            window.location.href = '/Subpages/Community.html';

        } else if (e.target.classList.contains('academics')) {
            window.location.href = '/Subpages/Academics.html';

        } else if (e.target.classList.contains('religious')) {
            window.location.href = '/Subpages/Religious.html';

        } else if (e.target.classList.contains('enviornment')) {
            window.location.href = '/Subpages/Environment.html';

        } else if (e.target.classList.contains('sociocultural')) {
            window.location.href = '/Subpages/Sociocultural.html';

        }
    })
})