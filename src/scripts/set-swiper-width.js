export function setSwiperWidth() {
  const swiper = document.querySelector( '.toggle-swiper' );

  if ( !swiper ) return;

  const container = swiper.closest( '.container' );
  const slides = swiper.querySelectorAll('.swiper-slide');
  const containerWidth = container.offsetWidth;
  const wrapperWidth = [ ...slides ].reduce( ( acc, item ) => { return acc + item.offsetWidth - 5; }, 0 );

  if ( containerWidth < wrapperWidth ) return;

  swiper.setAttribute( 'style', `width: ${wrapperWidth / 10}rem; margin: 0 auto;` );
}