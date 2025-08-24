const AREA_SELECTOR = document.querySelector('#NavigateAreas');
const DEFAULT = AREA_SELECTOR.querySelector('option');

DEFAULT.selected = true

AREA_SELECTOR.addEventListener('change', e => {
    let { value } = e.target;
    let redirectTo = `/Subpages/${value}.html`

    window.location.href = redirectTo;

})