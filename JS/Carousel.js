const PREV_BUTTON = document.querySelector('#PreviousSlide');
const NEXT_BUTTON = document.querySelector('#NextSlide');
const CAROUSEL = document.querySelector('#Slideshow');

let slidecounter = 1;
PREV_BUTTON.disabled = true;
PREV_BUTTON.ariaDisabled = true;

NEXT_BUTTON.addEventListener('click', e => {
    //move to next slide at 1-4
    if (slidecounter < 5) {
        slidecounter++
        CAROUSEL.classList.remove('slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5');
        CAROUSEL.classList.add(`slide-${slidecounter}`)
    }

    //prev button only works at slides 2-5
    if (slidecounter > 1) {
        PREV_BUTTON.disabled = false;
        PREV_BUTTON.ariaDisabled = false;
    }

    //disable button at slide 5
    if (slidecounter === 5) {
        NEXT_BUTTON.disabled = true;
        NEXT_BUTTON.ariaDisabled = true;
    }
})

PREV_BUTTON.addEventListener('click', e => {
    //move to prev slide 2-5
    if (slidecounter > 1) {
        slidecounter--
        CAROUSEL.classList.remove('slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5');
        CAROUSEL.classList.add(`slide-${slidecounter}`)
    }

    //next button only works at slide 1-4
    if (slidecounter < 5) {
        NEXT_BUTTON.disabled = false;
        NEXT_BUTTON.ariaDisabled = false;
    }
    
    //disable button at slide 1
    if (slidecounter === 1) {
        PREV_BUTTON.disabled = true;
        PREV_BUTTON.ariaDisabled = true;
    }
})
