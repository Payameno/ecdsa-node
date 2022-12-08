const secp  = require("ethereum-cryptography/secp256k1");
const { hexToBytes, toHex }  = require("ethereum-cryptography/utils");
const { keccak256 }  = require("ethereum-cryptography/keccak");

  function generatePublicKey (privateKey) {
    const BytesPrivateKey = hexToBytes(privateKey);
    const publicKey = secp.getPublicKey(BytesPrivateKey);
    const keccak256PublicKey = keccak256(publicKey).slice(-20);
    const publicKeyHex = toHex(keccak256PublicKey);
  }

module.exports = generatePublicKey;