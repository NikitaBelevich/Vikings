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


const menuNav = document.querySelector('nav.menu');
const menuList = document.querySelector('ul.menu__list');
const mobileMenuBtn = document.querySelector('#menu33');
mobileMenuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list_active');
});


// Получаем картинки с классом .lazyload в слайдере
const sliderImages = document.querySelectorAll('.heroes__slider-picture img.lazyload');
// Задали настройки для нашего Observer слайдера
const sliderOptionObserver = {
    root: document.querySelector('.heroes__slider-img'),
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.2 // параметр характеризующий при каком проценте видимости целевого элемента сработает callback
};
// Начинаем следить за нашей группой изображений.
observeGroupOfImages(sliderImages, sliderOptionObserver);


$(function() {
    $('.lazy-bg').lazy({
        name: 'lazy-bg',
        effect: 'fadeIn',
        effectTime: 400,
        threshold: 200
    });
});
