export function initHamburger() {

  const body = document.body;
  const button = document.querySelector( '.hamburger-button' );
  const hamburger = button.querySelector( '.hamburger' );
  const slider = document.querySelector( '.header__slider' );

  button.addEventListener('click', () => {
    body.classList.toggle( 'overflow-hidden' );
    hamburger.classList.toggle( 'active' );
    slider.classList.toggle( 'header__slider--active' );
  } );

}