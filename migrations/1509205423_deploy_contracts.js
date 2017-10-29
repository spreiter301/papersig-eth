let OriginContract = artifacts.require("./OriginContract.sol");
let ProofOfExistenceContract = artifacts.require("./ProofOfExistenceContract.sol");
let TestUtil = artifacts.require("./TestUtil.sol");

module.exports = function(deployer) {
  var origin;
  deployer.deploy([OriginContract, ProofOfExistenceContract, TestUtil]);
  deployer.then(() => Promise.all([OriginContract.deployed(), ProofOfExistenceContract.deployed()])
).then(([origin, poex]) => {
    return origin.addAddress(poex.address);
  });
};
