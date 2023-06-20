import { auto } from '@popperjs/core';
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiperQuotes = new Swiper('.reviews-slider', {
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },

  slidesPerView: 1,
  initialSlide: 1,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    700: {
      slidesPerView: 2,
    }
  }
});
