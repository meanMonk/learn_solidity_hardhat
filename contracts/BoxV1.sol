// SPDX-License-Identifier: MIT

pragma solidity 0.8.27;

// make box inherit from Ownable contract
contract Box {
  uint256 private _value;
  
  // Emitted event when the stored values changes
  event ValueChanged(uint256 value);
 
  function storeValue(uint256 value) public {
    _value = value;
    emit ValueChanged(value);
  }
  
  function retrieveValue() public view returns (uint256) {
    return _value;
  }
   
}