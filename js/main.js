const menuBtn = document.querySelector('.header__menu-btn');
const headerList = document.querySelector('.header__list')

menuBtn.addEventListener("click", () => {
    headerList.classList.toggle('active');
});

const swiper = new Swiper('.swiper', {

    loop: true,

    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        810: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1080: {
            slidesPerView: 2.25,
            spaceBetween: 64,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.projects-button-next',
        prevEl: '.projects-button-prev',
    }
});


const swiperTwo = new Swiper('.clients__swiper', {

    loop: true,
    initialSlide: 2,

    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        
        1215: {
            slidesPerView: 1.50,
            spaceBetween: 64,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.clients-button-next',
        prevEl: '.clients-button-prev',
    }
});