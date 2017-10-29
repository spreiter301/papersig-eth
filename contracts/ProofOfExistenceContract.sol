pragma solidity ^0.4.4;

/**
 * The Proof of Existence contract tells us how since when a document hash existet inside the contract.
 * MUST implement exists(bytes32 documentHash) returns (uint)
 */
contract ProofOfExistenceContract {

  address private owner;
  mapping (bytes32 => uint) private docs;

  /**
   * @return timestamp as seconds since unix epoch since the document has been added.
   * If 0, the document does not exist
   */
  function exists(bytes32 documentHash) returns (uint) {
    return docs[documentHash];
  }

  function addDocument(bytes32 documentHash) onlyOwner {
    if (exists(documentHash) == 0) {
      docs[documentHash] = block.timestamp;
    }
  }

  modifier onlyOwner() {
    require(owner == msg.sender);
    _;
  }
  function ProofOfExistenceContract() {
    owner = msg.sender;
  }
}
