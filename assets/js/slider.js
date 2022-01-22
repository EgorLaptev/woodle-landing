'use strict';

const sliderWrapper = document.querySelector('#sliderWrapper');

let slideIndex = 0;

setInterval( ()=> {
    if (slideIndex >= 2) slideIndex = 0;
    else slideIndex++;
    updateSlide(slideIndex);
}, 3000);

function updateSlide(index) {
    sliderWrapper.style.transform = `translateX(-${ slideIndex * 100 }%)`;
}
