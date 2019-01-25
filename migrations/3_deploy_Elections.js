const ElectionStore = artifacts.require("ElectionStore");
const TurnStore = artifacts.require("TurnStore");

module.exports = function(deployer) {
  deployer.deploy(ElectionStore, 2);
  deployer.deploy(TurnStore);
};