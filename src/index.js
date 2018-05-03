import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import NavDrawer from './Header/Header';
import Carousel from'./Middle/Home/Carousel';
import Icons from './Middle/Home/Icons'
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(<Icons/>, document.getElementById('root'));
registerServiceWorker();
