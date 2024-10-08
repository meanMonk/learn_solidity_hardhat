// SPDX-License-Identifier: MIT

pragma solidity 0.8.27;

import "@openzeppelin/contracts/access/Ownable.sol";

// make box inherit from Ownable contract
contract Box is Ownable {
  uint256 private _value;
  
  // Emitted event when the stored values changes
  event ValueChanged(uint256 value);
 
  constructor() Ownable(msg.sender) {}
  function storeValue(uint256 value) public onlyOwner {
    _value = value;
    emit ValueChanged(value);
  }
  
  function retrieveValue() public view returns (uint256) {
    return _value;
  }
   
}