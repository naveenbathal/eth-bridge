const ethers = require('ethers');


let abi = [
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "TransferToRinkeby",
            "type": "event"
        }
    ];


// Connect to the network
let provider = ethers.getDefaultProvider('kovan');

// The address from the above deployment example
let contractAddress = "0xc3ac0c1da5bc20819042b90592d0e20f06b6e14c";


let contract = new ethers.Contract(contractAddress, abi, provider);


contract.on("TransferToRinkeby", (amount, sender) => {
  
    console.log(sender, 'sent', amount.toString());
});