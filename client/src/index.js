import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Navbar from './Navbar';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Section />, document.getElementById('section'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

serviceWorker.unregister();
