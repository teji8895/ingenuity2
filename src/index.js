import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavDrawer from './Header'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NavDrawer/>, document.getElementById('root'));
registerServiceWorker();
