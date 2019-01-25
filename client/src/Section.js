import React, { Component } from 'react';
require('bootstrap')
require('jquery')

class Section extends Component {
  state = { candidates: [], loading: true, drizzleState: null, candidatesKey: null };

  componentDidMount() {
    const { drizzle } = this.props;

    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {

      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();
     
      // save the `dataKey` to local component state for later reference
      //this.setState({ dataKey });
      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        const contract = drizzleState.contracts.ElectionStore;
  
        // let drizzle know we want to watch the `myString` method
        const candidatesKey = contract.methods["candidates"].cacheCall();
        this.setState({ loading: false, drizzleState, candidatesKey }); 
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (this.state.loading) return "Loading Drizzle...";
    const { ElectionStore } = this.state.drizzleState.contracts;
    const candidates = ElectionStore.candidates[this.state.candidatesKey];
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
