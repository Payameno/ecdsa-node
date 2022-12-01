const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");


const privateKey = secp.utils.randomPrivateKey();

console.log('Hexidecimal private key', toHex(privateKey));

const publicKey = secp.getPublicKey(privateKey);

console.log('public key', toHex(publicKey));

//take the addresses as kecchak hash and get the last 20 bytes: Ethereum

const keccak256PublicKey = keccak256(publicKey).slice(-20);
console.log('toHex keccak256PublicKey', '0x' + toHex(keccak256PublicKey));