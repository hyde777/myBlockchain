import React, { Component } from 'react';
import logo from './img/logo.jpg'
require('bootstrap')
require('jquery')

class Navbar extends Component {
  render() {
    return(
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm fixed-top">
        <a class="my-0 mr-md-auto navbar-brand" href="#">
        <img src={logo} width="80" height="30"  alt=""></img>
        </a>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="active-link p-2" href="home">Home</a>
          <a className="p-2" href="resultat">Résultat</a>
        </nav>
      </div>
    )
  }
}

export default Navbar;
