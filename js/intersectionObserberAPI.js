'use strict';


function observeGroupOfImages(imagesList, configurationObserver) {
    // Создали экземпляр
    let observer = new IntersectionObserver(lazyloadIMG, configurationObserver);
    // Даём для observer все изображения для наблюдения
    imagesList.forEach(img => { // коллекция либо img либо source
        observer.observe(img);
    });
    // callback который будет вызываться при пересечении элемента с областью видимости
    function lazyloadIMG(imagesList) {
        imagesList.forEach(img => {
            // Здесь img это IntersectionObserverEntry
            if (img.isIntersecting) { // если элемент был пересечён viewport на 10%, т.е появился
                console.log(img);
                const target = img.target;

                if (target.tagName == 'SOURCE') {
                    const webpSrc = target.dataset.srcset;
                    const siblingImg = target.closest('picture').querySelector('img');
                    loadImage(siblingImg, webpSrc, target);
                } else {
                    const src = target.dataset.src;
                    loadImage(target, src);
                }
            }
        });
    }

    function loadImage(img, imgSrc, source = null) {
        img.src = imgSrc; // отправили запрос на получение картинки
        img.addEventListener('load', () => {
            // console.log('load');
            // Как только картинка загрузилась, мы даём ей класс для проявления, с нужной анимацией, т.е если она будет до этого момента не загружена, то анимация стработает сразу, причём даже на наполовине обрезанной загружающейся картинке.
            img.classList.add('lazyload_show'); // добавили класс проявления картинки
            // img.classList.remove('lazyload'); // удаляем класс
        });

        //! Говорим Observer прекратить наблюдение за целевой уже загруженной картинкой
        /*
            Первое из истинного, т.е если source, тогда прекращаем наблюдение за ним, иначе
            если он не был передан(в случае если у нас IMG), тогда вместо параметра source - null
            и его оператор || пропускает, в таком случае остаётся img, за ней и прекращается наблюдение
        */
        observer.unobserve(source || img);
    }
}
