'use strict';


function observeGroupOfImages(imagesList, configurationObserver) {
    // Создали экземпляр
    let observer = new IntersectionObserver(lazyloadIMG, configurationObserver);
    // Даём для observer все изображения для наблюдения
    imagesList.forEach(img => {
        observer.observe(img);
    });
    // callback который будет вызываться при пересечении элемента с областью видимости
    function lazyloadIMG(imagesList) {
        imagesList.forEach(img => {
            // Здесь img это IntersectionObserverEntry
            if (img.isIntersecting) { // если элемент был пересечён viewport на 10%, т.е появился
                console.log(img);
                const targetImg = img.target;
                loadImage(targetImg);
            }
        });
    }

    function loadImage(img) {
        img.src = img.dataset.src; // отправили запрос на получение картинки
        img.addEventListener('load', () => {
            // console.log('load');
            // Как только картинка загрузилась, мы даём ей класс для проявления, с нужной анимацией, т.е если она будет до этого момента не загружена, то анимация стработает сразу, причём даже на наполовине обрезанной загружающейся картинке.
            img.classList.add('lazyload_show'); // добавили класс проявления картинки
            // img.classList.remove('lazyload'); // удаляем класс
        });

        //! Говорим Observer прекратить наблюдение за целевой уже загруженной картинкой
        observer.unobserve(img);
    }
}
