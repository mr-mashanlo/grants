import { Accordion } from 'accordion';

export function initAccordions() {

  const accordions = document.querySelectorAll( '.question-accordion' );

  if ( !accordions ) return;

  accordions.forEach( accordion => {
    new Accordion( accordion, {
      modal: true
    } );
  } );

}
