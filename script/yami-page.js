const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.arrowNext',
    prevEl: '.arrowPrev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    
    // when window width is >= 320px
    400: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    680: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 640px
    1250: {
      slidesPerView: 3,
    }
  },
});