import React, { Component } from 'react';
require('bootstrap')
require('jquery')

class Header extends Component {
  render() {
    return(
          <header className="masthead d-flex">
            <div className="container text-center my-auto">
              <h1 className="">Site officiel de vote</h1>
              <h3 className="mb-5">
			          <em>Le changement c'est maintenant ! Choisissez votre candidat.</em>
		          </h3>
		          <div className="form-group ">
                <select className="form-control" id="selectCandidat">
                  <option>Jean Luc MAUDRID</option>
                  <option>Loghan RAMASSAMY</option>
                  <option>Yohan FAIRFORT</option>
                  <option>Léo MARCSHAL</option>
                </select>
              </div>
              <a className="btn btn-primary">VOTEZ !</a>
            </div>
            <div className="overlay"></div>
          </header>
    )
  }
}

export default Header;
