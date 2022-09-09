//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;


import "./IERC20.sol";
import "./Context.sol";
import "./librarySafeMath.sol";


 contract Erc20Token is IERC20 , Context{
    using SafeMath for uint256;

    string  private  name_;
    string  private  symbol_;
    uint8   private  decimals_;
    uint256 private  totalSupply_;

    mapping(address => uint256) balances;
    mapping(address => mapping (address => uint256)) allowed;

    constructor(string  memory _name,string memory _symbol,uint8 _decimals,uint _totoalsupply)  {
        name_ = _name;
        symbol_ = _symbol;
        decimals_ = _decimals;
        totalSupply_ = _totoalsupply;     // total tokens would equal (totalSupply_/10**decimals)=1000
        balances[msg.sender] = totalSupply_;
    }

    function name() public override view returns (string memory) {
        return name_;
    }

    function symbol() public override view returns (string memory) {
        return symbol_;
    }

    function decimals() public override view returns (uint8) {
        return decimals_;
    }

    function totalSupply() public override view returns (uint256) {
        return totalSupply_;
    }

    function balanceOf(address tokenOwner) public override view returns (uint256) {
        return balances[tokenOwner];
    }

    function transfer(address receiver, uint256 numTokens) public override returns (bool) {
        require(numTokens <= balances[msg.sender],"Not enough Token");
        require(receiver != address(0),"ERC20: transfer to the zero address");
        balances[_msgSender()] = balances[_msgSender()].sub(numTokens);
        balances[receiver] = balances[receiver].add(numTokens);
        emit Transfer(_msgSender(), receiver, numTokens);
        return true;
    }

    function approve(address delegate, uint256 numTokens) public override returns (bool) {
        require(delegate != address(0),"ERC20: transfer from the zero address");
        allowed[_msgSender()][delegate] = numTokens;
        emit Approval(_msgSender(), delegate, numTokens);
        return true;
    }

    function allowance(address owner, address delegate) public override view returns (uint) {
        require(owner != address(0),"ERC20: transfer from the zero address");
        require(delegate != address(0),"ERC20: transfer to the zero address");
        return allowed[owner][delegate];
    }

    function transferFrom(address owner, address buyer, uint256 numTokens) public override returns (bool) {
        require(numTokens <= balances[owner],"Not enough Token");
        require(numTokens <= allowed[owner][_msgSender()],"Not enough Token");
        require(owner != address(0),"ERC20: transfer from the zero address");
        require(buyer != address(0),"ERC20: transfer to the zero address");

        balances[owner] = balances[owner].sub(numTokens);
        allowed[owner][_msgSender()] = allowed[owner][_msgSender()].sub(numTokens);
        balances[buyer] = balances[buyer].add(numTokens);
        emit Transfer(owner, buyer, numTokens);
        return true;
    }
}


