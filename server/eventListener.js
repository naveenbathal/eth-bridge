const ethers = require('ethers');
require('dotenv')

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
let providerRinkby = ethers.getDefaultProvider('rinkeby');
let wallet = new ethers.Wallet('818D9A9D501AF12F4D9232120093946A57BEFEA0D10278EA1652CC80BF713722', providerRinkby);

// The address from the above deployment example
let contractAddress = "0xc3ac0c1da5bc20819042b90592d0e20f06b6e14c";

let contract = new ethers.Contract(contractAddress, abi, provider);

contract.on("TransferToRinkeby", (amount, sender) => {
    transfer(sender, amount)
    console.log(sender, 'sent', amount.toString());
});


function transfer(receiver, amount){
    let tx = {
        to: receiver,
        value: amount
    };
    
    let sendPromise = wallet.sendTransaction(tx);
    
    sendPromise.then((tx) => {
        console.log(tx);   
    });


}