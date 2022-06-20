"use strict"

const slider = tns({
    container: '.carousel__wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    navPosition: 'bottom',
    autoHeight: true
});

document.querySelector('.carousel__prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.carousel__next').addEventListener('click', function () {
    slider.goTo('next');
});