import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Navbar from './Navbar';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

// import drizzle functions and contract artifact
import { Drizzle, generateStore } from "drizzle";
import ElectionStore from "./contracts/ElectionStore.json";

// let drizzle know what contracts we want
const options = { contracts: [ElectionStore] };

// setup the drizzle store and drizzle
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Section drizzle={drizzle} />, document.getElementById('section'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

serviceWorker.unregister();
