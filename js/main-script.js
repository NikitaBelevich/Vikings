'use strict';

// Исправление бага с vh на моб.устройствах, где интерфейс браузера может забирать от 100vh
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
// Исправление бага с vh на моб.устройствах, где интерфейс браузера может забирать от 100vh

$('[data-fancybox]').fancybox({
    youtube : {
        autoplay: 0,
        // controls : 0,
        // showinfo : 0,
    },
});

$('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    speed: 600,
    nextArrow: '<button type="button" class="slick-next slick-btn"><img src="./img/optimize/slider-arrows/right-arrow.png" alt="Next"></button>',
    prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="./img/optimize/slider-arrows/left-arrow.png" alt="Previous"></button>',
    asNavFor: '.heroes__slider-text'
});
$('.heroes__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    fade: true,
    nextArrow: false,
    prevArrow: false,
    draggable : false,
    asNavFor: '.heroes__slider-img',
});