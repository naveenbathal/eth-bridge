const ethers = require('ethers');
const config = require('./config.json')
require('dotenv').config()

// Connect to the network
let provider = ethers.getDefaultProvider('kovan');
let providerRinkby = ethers.getDefaultProvider('rinkeby');
let wallet = new ethers.Wallet(process.env.PK, providerRinkby);

let contract = new ethers.Contract(config.contractAddress, config.abi, provider);

contract.on("TransferToRinkeby", (amount, sender) => {
    transfer(sender, amount)
    console.log(sender, 'sent', amount.toString());
});

console.log('Listener started...')

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