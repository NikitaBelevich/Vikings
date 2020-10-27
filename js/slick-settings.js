'use strict';

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
