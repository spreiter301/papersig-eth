pragma solidity ^0.4.4;

/**
 * The origin contract tells us which Proof of Existence contracts we can trust.
 * MUST implement isFromOrigin(address addr) returns (bool)
 */
contract OriginContract {

  address private owner;
  mapping (address => bool) private addresses;

  /**
   * @return true if addr is a Proof of Existence contract address we can trust. Otherwise false
   */
  function isFromOrigin(address addr) returns (bool) {
    return addresses[addr];
  }

  modifier onlyOwner() {
    require(owner == msg.sender);
    _;
  }

  function OriginContract() {
    owner = msg.sender;
  }

  function addAddress(address addr) onlyOwner {
    addresses[addr] = true;
  }

  function removeAddress(address addr) onlyOwner {
    addresses[addr] = false;
  }

  
}
