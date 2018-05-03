import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import 'babel-polyfill';

//  Add  styles
require('../public/styles/index.scss');
//  Add custom fonts rules
require('../public/fonts/stylesheet.scss');

ReactDOM.render(<Root />, document.getElementById('root'));
