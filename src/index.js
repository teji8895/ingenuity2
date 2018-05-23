import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavDrawer from './Header/Header';
import Carousel from'./Middle/Home/Carousel';
import Icons from './Middle/Home/Icons'
import Footer from './Footer/Footer'
import registerServiceWorker from './registerServiceWorker';
import AboutUs from './Middle/AboutUs/AboutUs';
import Header from './Header/Header';



ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
