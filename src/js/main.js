import '../sass/main.sass';
import { initAccordions } from './accordions';
import { initvalidators } from './form';
import { initHamburger } from './hamburger';
import { initSwipers, setSwiperWidth } from './swipers';

initSwipers();
setSwiperWidth();
initAccordions();
initHamburger();
initvalidators();