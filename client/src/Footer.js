import React, { Component } from 'react';
import logo from './img/logo.jpg'
require('bootstrap')
require('jquery')

class Footer extends Component {
  render() {
    return(
          <footer className="footer text-center">
            <div className="container">
              <p className="small mb-0">Copyright &copy; Site officiel de vote 2019</p>
            </div>
          </footer>
    )
  }
}

export default Footer;
