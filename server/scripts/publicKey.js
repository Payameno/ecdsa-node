import * as secp from "ethereum-cryptography/secp256k1";
import { hexToBytes, toHex } from "ethereum-cryptography/utils";
import { keccak256 } from "ethereum-cryptography/keccak";

  function generatePublicKey (privateKey) {
    const BytesPrivateKey = hexToBytes(privateKey);
    const publicKey = secp.getPublicKey(BytesPrivateKey);
    const keccak256PublicKey = keccak256(publicKey).slice(-20);
    const publicKeyHex = toHex(keccak256PublicKey);
  }

module.exports = generatePublicKey;