import { CONTENT } from "./Content.js";

const CAROUSEL_ELEMENT = document.querySelector('#Carousel')

let CarouselContent = CONTENT.LandingPage.Carousel

CAROUSEL_ELEMENT
    .querySelector('.slide.community')
    .setAttribute('alt', CarouselContent.Community[1])
CAROUSEL_ELEMENT
    .querySelector('.slide.community')
    .setAttribute('src', CarouselContent.Community[0])
CAROUSEL_ELEMENT
    .querySelector('.slide.academics')
    .setAttribute('alt', CarouselContent.Academics[1])
CAROUSEL_ELEMENT
    .querySelector('.slide.academics')
    .setAttribute('src', CarouselContent.Academics[0])
CAROUSEL_ELEMENT
    .querySelector('.slide.religious')
    .setAttribute('alt', CarouselContent.Religious[1])
CAROUSEL_ELEMENT
    .querySelector('.slide.religious')
    .setAttribute('src', CarouselContent.Religious[0])
CAROUSEL_ELEMENT
    .querySelector('.slide.environment')
    .setAttribute('alt', CarouselContent.Environment[1])
CAROUSEL_ELEMENT
    .querySelector('.slide.environment')
    .setAttribute('src', CarouselContent.Environment[0])
CAROUSEL_ELEMENT
    .querySelector('.slide.sociocultural')
    .setAttribute('alt', CarouselContent.Sociocultural[1])
CAROUSEL_ELEMENT
    .querySelector('.slide.sociocultural')
    .setAttribute('src', CarouselContent.Sociocultural[0])

console.log('Loaded Carousel');

const CATCH_UP_HEADER = document.querySelector(`#CatchUpHeader`)
const CATCH_UP_DATE = document.querySelector(`#CatchUpDate`)
const CATCH_UP_IMAGE = document.querySelector(`#CatchUpImage`)

let CatchUpContent = CONTENT.LandingPage.CatchUpWithCares

CATCH_UP_HEADER
    .setAttribute('href', CatchUpContent.Link)
CATCH_UP_HEADER.textContent = CatchUpContent.Headline;
CATCH_UP_DATE.textContent = CatchUpContent.Date
CATCH_UP_IMAGE
    .setAttribute('src', CatchUpContent.Image[0]);
CATCH_UP_IMAGE
    .setAttribute('alt', CatchUpContent.Image[1]);

console.log('Loaded Catch Up');

const ABOUT_CARES_IMAGE = document.querySelector('#AboutCARESImage');
const ABOUT_CARES_HEADER = document.querySelector('#AboutCARESHeader');
const ABOUT_CARES_SUBTITLE = document.querySelector('#AboutCARESSubtitle');
const ABOUT_CARES_PARAGRAPH= document.querySelector('#AboutCARESParagraph');

let AboutCaresContent = CONTENT.LandingPage.AboutCares

ABOUT_CARES_IMAGE
    .setAttribute('src', AboutCaresContent.Image[0])
ABOUT_CARES_IMAGE
    .setAttribute('alt', AboutCaresContent.Image[1])
ABOUT_CARES_HEADER
    .textContent = AboutCaresContent.Headline
ABOUT_CARES_SUBTITLE
    .textContent = AboutCaresContent.Subtitle
ABOUT_CARES_PARAGRAPH
    .innerHTML = AboutCaresContent.Content
                    .replace('PharmChem CARES', '<strong>PharmChem CARES</strong>')
                    .replace('Community', '<strong><a class="community" href="/Subpages/Community.html">Community</a></strong>')
                    .replace('Academics', '<strong><a class="academics" href="/Subpages/Academics.html">Academics</a></strong>')
                    .replace('Religious', '<strong><a class="religious" href="/Subpages/Religious.html">Religious</a></strong>')
                    .replace('Environment', '<strong><a class="environment" href="/Subpages/Environment.html">Environment</a></strong>')
                    .replace('Sociocultural', '<strong><a class="sociocultural" href="/Subpages/Sociocultural.html">Sociocultural</a></strong>')