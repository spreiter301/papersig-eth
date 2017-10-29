let ProofOfExistenceContract = artifacts.require("./ProofOfExistenceContract.sol");
let TestUtil = artifacts.require("./TestUtil.sol");

contract('ProofOfExistenceContract', function(accounts) {
  var documentHash;
  var poex;
  var tu;
  it("should proof that document exists", function(done) {
    Promise.all([ProofOfExistenceContract.deployed(), TestUtil.deployed()])
      .then(([p, t]) => {
        poex = p;
        tu = t;
      })
      .then(() => tu.documentHash.call("Hello"))
      .then(dh => documentHash = dh)
      .then(() => poex.exists.call(documentHash))
      .then(result => assert.isTrue(result == 0))
      .then(() => poex.addDocument(documentHash))
      .then(() => poex.exists.call(documentHash))
      .then(result => assert.isTrue(result > 0))
      .then(() => done())
      ;
  });
});
