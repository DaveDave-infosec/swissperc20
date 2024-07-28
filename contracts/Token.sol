// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./PERC20.sol";

/**
 * @dev Mintable implementation of the {PERC20} contract.
 */
contract TestToken  is PERC20 {
    constructor()PERC20("YbnDao","YBN"){}

    function mintToken() public {
        _mint(msg.sender,100*10**18);
    }
}
