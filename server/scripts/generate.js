const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");
// import hashMessage from "./hashMessage";


const privateKey = secp.utils.randomPrivateKey();
const publicKey = secp.getPublicKey(privateKey);
//take the addresses as kecchak hash and get the last 20 bytes: Ethereum
const keccak256PublicKey = keccak256(publicKey).slice(-20);


console.log('Hexidecimal private key', toHex(privateKey));
console.log('public key', toHex(publicKey));
console.log('toHex keccak256PublicKey', '0x' + toHex(keccak256PublicKey));

//Create Signature

// function getSignature(privateKey) {
//   const msg = hashMessage('Approving transaction');
//   const signature = secp.sign(msg, privateKey, {recovered: true});
//   return signature;
// }