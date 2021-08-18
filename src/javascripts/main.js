import 'bootstrap';
import '../styles/main.scss';

import initialScreen from './components/initialScreen';
import domEvents from './helpers/domEvents';

const init = () => {
  initialScreen();
  domEvents();
};

init();
