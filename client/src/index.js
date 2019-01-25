import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Navbar from './Navbar';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import Web3 from 'web3';

// // import drizzle functions and contract artifact
// import { Drizzle, generateStore } from "drizzle";
// import ElectionStore from "./contracts/ElectionStore.json";

// // let drizzle know what contracts we want
// const options = { contracts: [ElectionStore] };

// // setup the drizzle store and drizzle
// const drizzleStore = generateStore(options);
// const drizzle = new Drizzle(options, drizzleStore);
let web3js;
if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3js = new Web3(web3.currentProvider);
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }


ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Section web3js={web3js} />, document.getElementById('section'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

serviceWorker.unregister();
