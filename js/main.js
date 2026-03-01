const menuBtn = document.querySelector('.header__menu-btn');
const headerList = document.querySelector('.header__list');

menuBtn.addEventListener("click", () => {
    headerList.classList.toggle('active');
});

// Projects slider
const projectsSwiper = new Swiper('.projects__swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        810: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1080: {
            slidesPerView: 2.25,
            spaceBetween: 64,
        },
    },

    navigation: {
        nextEl: '.projects-button-next',
        prevEl: '.projects-button-prev',
    }
});

// Clients slider
const clientsSwiper = new Swiper('.clients__swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        1215: {
            slidesPerView: 1.5,
            spaceBetween: 64,
        },
    },

    navigation: {
        nextEl: '.clients-button-next',
        prevEl: '.clients-button-prev',
    }
});