import React, { Component } from 'react';
require('bootstrap')
require('jquery')

class Section extends Component {
  state = { 
    candidates: [], 
    loading: true, 
    contract: null,
    electionStore: null,
    candidatesKey: null 
  };

  componentDidMount() {
    var numberOfTurn = 2;
    const abi = [{"constant":false,"inputs":[],"name":"advanceTurn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getCurrentTurn","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"numberOfTurn","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

    var electionstoreContract = this.props.web3js.eth.contract(abi);
    var electionstore = electionstoreContract.new(
      numberOfTurn,
      {
        from:  this.props.web3js.eth.accounts[0], 
        data: '0x6080604052600160005534801561001557600080fd5b5060405160208061126f83398101806040528101908080519060200190929190505050806001819055506100476100bc565b604051809103906000f080158015610063573d6000803e3d6000fd5b50600260008054815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506100cc565b6040516107f280610a7d83390190565b6109a2806100db6000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680636f3d7e6414610051578063a9b6ab8d14610068575b600080fd5b34801561005d57600080fd5b506100666100bf565b005b34801561007457600080fd5b5061007d610148565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600160008082825401925050819055506100d7610174565b604051809103906000f0801580156100f3573d6000803e3d6000fd5b50600260008054815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000610152610174565b604051809103906000f08015801561016e573d6000803e3d6000fd5b50905090565b6040516107f280610185833901905600608060405234801561001057600080fd5b50600060408051908101604052806040805190810160405280600781526020017f4f6c69766965720000000000000000000000000000000000000000000000000081525081526020016040805190810160405280600681526020017f4a65616e6e65000000000000000000000000000000000000000000000000000081525081525060009060026100a2929190610157565b50600090505b60008054905081101561015157600060016000838154811015156100c857fe5b90600052602060002001604051808280546001816001161561010002031660029004801561012d5780601f1061010b57610100808354040283529182019161012d565b820191906000526020600020905b815481529060010190602001808311610119575b505091505090815260200160405180910390208190555080806001019150506100a8565b506102d0565b8280548282559060005260206000209081019282156101a6579160200282015b828111156101a55782518290805190602001906101959291906101b7565b5091602001919060010190610177565b5b5090506101b39190610237565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101f857805160ff1916838001178555610226565b82800160010185558215610226579182015b8281111561022557825182559160200191906001019061020a565b5b5090506102339190610263565b5090565b61026091905b8082111561025c57600081816102539190610288565b5060010161023d565b5090565b90565b61028591905b80821115610281576000816000905550600101610269565b5090565b90565b50805460018160011615610100020316600290046000825580601f106102ae57506102cd565b601f0160209004906000526020600020908101906102cc9190610263565b5b50565b610513806102df6000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633477ee2e14610067578063462e91ec1461010d578063a448154c14610176578063c04752d8146101f3575b600080fd5b34801561007357600080fd5b506100926004803603810190808035906020019092919050505061025c565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100d25780820151818401526020810190506100b7565b50505050905090810190601f1680156100ff5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561011957600080fd5b50610174600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610317565b005b34801561018257600080fd5b506101dd600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506103a6565b6040518082815260200191505060405180910390f35b3480156101ff57600080fd5b5061025a600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061042f565b005b60008181548110151561026b57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561030f5780601f106102e45761010080835404028352916020019161030f565b820191906000526020600020905b8154815290600101906020018083116102f257829003601f168201915b505050505081565b60001515610324826104bf565b151514151561033257600080fd5b60006001826040518082805190602001908083835b60208310151561036c5780518252602082019150602081019050602083039250610347565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390208190555050565b60006103b1826104bf565b15156103bc57600080fd5b6001826040518082805190602001908083835b6020831015156103f457805182526020820191506020810190506020830392506103cf565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549050919050565b610438816104bf565b151561044357600080fd5b600180826040518082805190602001908083835b60208310151561047c5780518252602082019150602081019050602083039250610457565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206000828254019250508190555050565b600080600090506000805490508110156104dc57600191506104e1565b600091505b509190505600a165627a7a72305820a393bed394dc259d2f3c3fdad34e82b338f844c200c60ff190e973dc9a03ef170029a165627a7a72305820004e2de28d4f8cd255cfa517552f8afa0249a7e878710d8a6efd9ae7c82eab6c0029608060405234801561001057600080fd5b50600060408051908101604052806040805190810160405280600781526020017f4f6c69766965720000000000000000000000000000000000000000000000000081525081526020016040805190810160405280600681526020017f4a65616e6e65000000000000000000000000000000000000000000000000000081525081525060009060026100a2929190610157565b50600090505b60008054905081101561015157600060016000838154811015156100c857fe5b90600052602060002001604051808280546001816001161561010002031660029004801561012d5780601f1061010b57610100808354040283529182019161012d565b820191906000526020600020905b815481529060010190602001808311610119575b505091505090815260200160405180910390208190555080806001019150506100a8565b506102d0565b8280548282559060005260206000209081019282156101a6579160200282015b828111156101a55782518290805190602001906101959291906101b7565b5091602001919060010190610177565b5b5090506101b39190610237565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101f857805160ff1916838001178555610226565b82800160010185558215610226579182015b8281111561022557825182559160200191906001019061020a565b5b5090506102339190610263565b5090565b61026091905b8082111561025c57600081816102539190610288565b5060010161023d565b5090565b90565b61028591905b80821115610281576000816000905550600101610269565b5090565b90565b50805460018160011615610100020316600290046000825580601f106102ae57506102cd565b601f0160209004906000526020600020908101906102cc9190610263565b5b50565b610513806102df6000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633477ee2e14610067578063462e91ec1461010d578063a448154c14610176578063c04752d8146101f3575b600080fd5b34801561007357600080fd5b506100926004803603810190808035906020019092919050505061025c565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100d25780820151818401526020810190506100b7565b50505050905090810190601f1680156100ff5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561011957600080fd5b50610174600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610317565b005b34801561018257600080fd5b506101dd600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506103a6565b6040518082815260200191505060405180910390f35b3480156101ff57600080fd5b5061025a600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061042f565b005b60008181548110151561026b57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561030f5780601f106102e45761010080835404028352916020019161030f565b820191906000526020600020905b8154815290600101906020018083116102f257829003601f168201915b505050505081565b60001515610324826104bf565b151514151561033257600080fd5b60006001826040518082805190602001908083835b60208310151561036c5780518252602082019150602081019050602083039250610347565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390208190555050565b60006103b1826104bf565b15156103bc57600080fd5b6001826040518082805190602001908083835b6020831015156103f457805182526020820191506020810190506020830392506103cf565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549050919050565b610438816104bf565b151561044357600080fd5b600180826040518082805190602001908083835b60208310151561047c5780518252602082019150602081019050602083039250610457565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390206000828254019250508190555050565b600080600090506000805490508110156104dc57600191506104e1565b600091505b509190505600a165627a7a72305820a393bed394dc259d2f3c3fdad34e82b338f844c200c60ff190e973dc9a03ef170029', 
        gas: '4700000'
      }, function (e, contract){
        console.log(e, contract);
        if (typeof contract.address !== 'undefined') {
            console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
        }
    })
    let contract = this.props.web3js.eth.contract(abi);
    contract.new();
    this.getCandidates(contract)
        .then((rst) => candidates = rst)
    this.setState({contract});
  }

  getCandidates(contract) {
    return new Promise(function (resolve, reject) {
      contract.getCurrentTurn(function (error, result) {
          if (!error) {
              resolve(result);
          }
          else {
              reject(error);
          }
      });
    });
  }
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
