import server from "./server";
import * as secp from "ethereum-cryptography/secp256k1";
import { toHex } from "ethereum-cryptography/utils";
import { keccak256 } from "ethereum-cryptography/keccak";

function Wallet({ address, setAddress, balance, setBalance, privateKey, setPrivateKey }) {
  async function onChange(evt) {

    const privateKey = evt.target.value;
    setPrivateKey(privateKey);

    const publicKey = secp.getPublicKey(privateKey);
    const keccak256PublicKey = keccak256(publicKey).slice(-20);
    const publicKeyHex = toHex(keccak256PublicKey);
    setAddress(publicKeyHex);

    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Private Key
        <input placeholder="Please type in your private Key" value={privateKey} onChange={onChange}></input>
      </label>
      <p>Address(Public Key): {address}</p>
      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
