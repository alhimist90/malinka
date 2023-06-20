import { auto } from '@popperjs/core';
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiperQuotes = new Swiper('.gallery-slider', {
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },

  slidesPerView: 1,
  freeMode: true,
  initialSlide: 3,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    1200: {
      slidesPerView: 4,
    },

    768: {
      slidesPerView: 3,
    },

    500: {
      slidesPerView: 2,
    }
  }
});

Fancybox.bind('[data-fancybox="gallery"]', {
  // Your custom options
});
