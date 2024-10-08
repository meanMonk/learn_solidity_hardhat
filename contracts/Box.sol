// SPDX-License-Identifier: MIT

pragma solidity 0.8.27;

import "./access-control/Auth.sol";

contract Box {
  uint256 private _value;
  Auth private _auth;
  
  
  // Emitted event when the stored values changes
  event ValueChanged(uint256 value);
 
  constructor() {
    _auth = new Auth(msg.sender);
  }
  function storeValue(uint256 value) public {
    
    require(_auth.isAdministrator(msg.sender), "UnAuthorized User!");
    _value = value;
    
    emit ValueChanged(value);
  }
  
  function retrieveValue() public view returns (uint256) {
    return _value;
  }
   
}