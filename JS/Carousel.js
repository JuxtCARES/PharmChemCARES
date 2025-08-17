const PREV_SLIDE_BUTTON = document.querySelector('#PrevSlide');
const NEXT_SLIDE_BUTTON = document.querySelector('#NextSlide');
const CAROUSEL = document.querySelector('#Carousel');

let currentSlide = parseFloat(CAROUSEL.dataset.slide);

PREV_SLIDE_BUTTON.disabled = true;
NEXT_SLIDE_BUTTON.disabled = false;

PREV_SLIDE_BUTTON.addEventListener('click', e => {
    if (currentSlide === 4) {
        NEXT_SLIDE_BUTTON.disabled = false;
    }

    if (currentSlide === 1) {
        PREV_SLIDE_BUTTON.disabled = true;
    }

    CAROUSEL.dataset.slide = --currentSlide
})

NEXT_SLIDE_BUTTON.addEventListener('click', e => {
    if (currentSlide === 0) {
        PREV_SLIDE_BUTTON.disabled = false;
    }

    if (currentSlide === 3) {
        NEXT_SLIDE_BUTTON.disabled = true;
    }

    CAROUSEL.dataset.slide = ++currentSlide
})