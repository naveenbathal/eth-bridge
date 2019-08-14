pragma solidity ^0.5.1;

contract KovanToRinkeby {
    
    //Contract Address: 0xc3ac0c1da5bc20819042b90592d0e20f06b6e14c

    event TransferToRinkeby(uint256 amount, address sender);
    
    function () external payable {
        emit TransferToRinkeby(msg.value, msg.sender);
    }
        
}