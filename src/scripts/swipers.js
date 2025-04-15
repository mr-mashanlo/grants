import Swiper from 'swiper';

export function initSwipers() {

  new Swiper( '.project-swiper', {
    spaceBetween: 24,
    speed: 600,
    loop: false,
    slidesPerView: 1.07,
    breakpoints: {
      450: { slidesPerView: 3 }
    }
  } );

  new Swiper( '.toggle-swiper', {
    spaceBetween: 0,
    speed: 600,
    loop: false,
    slidesPerView: 'auto'
  } );

}