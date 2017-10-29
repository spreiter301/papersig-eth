let OriginContract = artifacts.require("./OriginContract.sol");
let ProofOfExistenceContract = artifacts.require("./ProofOfExistenceContract.sol");

contract('OriginContract', function(accounts) {
  it("should return false when contract address is not from origin", function(done) {
    let origin_contract = OriginContract.deployed();
    origin_contract.then(instance => {
      instance.isFromOrigin.call("0x0")
        .then(result => assert.isFalse(result))
        .then(() => done());
    });
  });
});

contract('OriginContract', function(accounts) {
  it("should return true when contract address is from origin", function(done) {
    let origin_contract = OriginContract.deployed();
    let poex_contract = ProofOfExistenceContract.deployed();

    var origin;
    var poex;

    origin_contract.then(instance => {
      origin = instance;
      return poex_contract;
    }).then(instance => poex = instance)
    .then(() => origin.isFromOrigin.call(poex.address))
    .then(result => assert.isTrue(result))
    .then(() => done());
  });
});
