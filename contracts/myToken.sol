//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "./Erc20.sol";


contract KashCoin is Erc20Token{


    constructor() Erc20Token( "KashCoin", "KSH" , 5 , 1000 * 1e5 ){
        balances[msg.sender] = 1000 * 1e5;
    }
}