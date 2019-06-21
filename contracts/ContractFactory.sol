pragma solidity ^0.5.0;

contract ContractFactory {
  function createInstance() public {
    new Contract();
  }
}

contract Contract {
  constructor() public {}
}
