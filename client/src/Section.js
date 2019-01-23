import React, { Component } from 'react';
require('bootstrap')
require('jquery')

class Section extends Component {
  render() {
    return(
          <section className="content-section bg-light" id="resultat">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                
                  <h2>Résultat</h2>
                  <p className="lead mb-5">Tableau récapitulatif des votes</p>
                  <table className="table table-striped">
              <thead>
                <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Vote</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>Loghan</td>
                <td>RAMASSAMY</td>
                <td>11</td>
                </tr>
                <tr>
                <td>Yohan</td>
                <td>FARFORT</td>
                <td>50</td>
                </tr>
                <tr>
                <td>Jean-Luc</td>
                <td>MAUDRID</td>
                <td>46</td>
                </tr>
              </tbody>
            </table>
                </div>
              </div>
            </div>
          </section>
    )
  }
}

export default Section;
