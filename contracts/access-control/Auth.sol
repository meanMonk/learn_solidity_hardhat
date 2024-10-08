// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

/// @title Auth contract to give permission to only administrator to access.
/// @author Sahil
/// @notice Contract work As Auth 
/// @dev Explain to a developer any extra details


contract Auth {
  address private _administrator;
  
  constructor (address deployer ) {
    // make deployer of contract as administrator.
    _administrator = deployer;
  }
  
  function isAdministrator(address user) public view returns (bool) {
    return user == _administrator;
  }
}