const swip = new Swiper('.swip', {
  loop: true,
  speed: 700,
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.btnNext',
    prevEl: '.btnPrev',
  },
  breakpoints: {
    900: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    380: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  },
});

const mySwip = new Swiper('.mySwip', {
  speed: 700,
  slidesPerView: 2,
  spaceBetween: 20,
  grid: {
    rows: 2,
    fill: "row",
  },
  navigation: {
    nextEl: '.butNext',
    prevEl: '.butPrev',
  },
});


const mediaQuery = window.matchMedia('(max-width: 500px)');

function handleResponsiveChange(event) {
  // При изменении ширины экрана
  if (event.matches) {
    // Изменяем параметры Swiper для ширины 500px и менее
    mySwip.params.slidesPerView = 1;
    mySwip.params.grid.rows = 1;
    // Обновляем Swiper
    mySwip.update();
  } else {
    // Возвращаем исходные параметры Swiper
    mySwip.params.slidesPerView = 2;
    mySwip.params.grid.rows = 2;
    // Обновляем Swiper
    mySwip.update();
  }
}

// Вызываем функцию при загрузке страницы
handleResponsiveChange(mediaQuery);

// Слушаем изменения ширины экрана
mediaQuery.addListener(handleResponsiveChange);

