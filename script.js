new Swiper('.image-slider', {
    slidesPerGroup: 3,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});

new Swiper('.image-slider2',{
    loop: true,
    slidesPerGroup: 1,
    spaceBetween: 0,
    navigation: {
        el : ".swiper-pagination"
    }
});