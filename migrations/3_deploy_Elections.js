const ElectionStore = artifacts.require("ElectionStore");

module.exports = function(deployer) {
  deployer.deploy(ElectionStore);
};