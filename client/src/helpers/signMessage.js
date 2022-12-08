import secp from "ethereum-cryptography/secp256k1";
import hashMessage from './hashMessage';

async function signMessage(msg) {

    const hash = hashMessage(msg);
    const signedMessage = await secp.sign(hash, privateKey, { recovered: true });
    return signedMessage;
    
}

module.exports = signMessage;