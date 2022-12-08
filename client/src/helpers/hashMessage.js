import { keccak256 } from "ethereum-cryptography/keccak";
import { utf8ToBytes } from "ethereum-cryptography/utils";

function hashMessage(message) {

    const byteMessage = utf8ToBytes(message);
    const HashedMessage = keccak256(byteMessage);
    return HashedMessage;

}

module.exports = hashMessage;