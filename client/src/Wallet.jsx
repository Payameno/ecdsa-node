import server from "./server";

function Wallet({ address, setAddress, balance, setBalance, privateKey, setPrivateKey }) {
  async function onChange(evt) {

    const privateKey = evt.target.value;
    setPrivateKey(privateKey);


    setAddress('0x'+publicKeyHex);
    console.log('address', address);

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
      <p className="account-details">Address(Public Key): {address}</p>
      <div className="account-details">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
