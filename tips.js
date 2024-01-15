import Swiper from 'swiper';
import smart from 'smart-animate';

const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  slidesPerView: 1, /* Show one card at a time */
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: () => {
      const slides = swiper.slides;
      slides.forEach((slide, index) => {
        smart(slide, {
          animate: 'fadeInOut', /* Use fadeInOut for smooth animation */
          duration: 1500,
          delay: index * 1500,
        });
      });
    },
  },
});
