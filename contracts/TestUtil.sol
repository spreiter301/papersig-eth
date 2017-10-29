pragma solidity ^0.4.4;

contract TestUtil {
  function TestUtil() {
    
  }

  function documentHash(string document) returns (bytes32) {
    return sha256(document);
  }
}
