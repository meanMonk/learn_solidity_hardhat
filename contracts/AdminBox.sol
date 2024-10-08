// SPDX-License-Identifier: MIT

pragma solidity 0.8.27;
/* 
  @dev
  - upgradeable contract can not have contructor
 */

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract AdminBox is Initializable {
  uint256 private _value;
  address private _admin;
  
  // Emitted event when the stored values changes
  event ValueChanged(uint256 value);

  function initialize(address admin) public initializer {
     _admin = admin;
  } 

    /// @custom:oz-upgrades-unsafe-allow constructor
  constructor() initializer {}

  function store(uint256 value) public {
    require(msg.sender == _admin, "AdminBox: not admin");
    _value = value;
    emit ValueChanged(value);
  }
  
  function decreament() public {
    _value -=1;
    emit ValueChanged(_value);
  }
  
  function increament() public {
    _value += 1;
    emit ValueChanged(_value);
  }  
  function retrieve() public view returns (uint256) {
    return _value;
  }
   
}