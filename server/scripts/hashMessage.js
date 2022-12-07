const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {

    const byteMessage = utf8ToBytes(message);
    const HashedMessage = keccak256(byteMessage);
    return HashedMessage;

}

module.exports = hashMessage;