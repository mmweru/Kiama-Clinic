import Swiper from 'swiper';
import smart from 'smart-animate';

const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // Adjust breakpoint if needed
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
  on: {
    init: () => {
      const slides = swiper.slides;
      slides.forEach((slide, index) => {
        smart(slide, {
          animate: 'fadeInOut',
          duration: 1500,
          delay: index * 1500,
        });
      });
    },
  },
});
