import Wallet from "./Wallet";
import Transfer from "./Transfer";
import { useState } from "react";
import "./App.scss";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [signedMessage, setsignedMessage] = useState("");

  return (
    <div className="app">
      <Wallet
        balance={balance}
        privateKey={privateKey}
        setPrivateKey={setPrivateKey}
        setBalance={setBalance}
        signedMessage={signedMessage}
        setsignedMessage={setsignedMessage}
        address={address}
        setAddress={setAddress}
      />
      <Transfer setBalance={setBalance} address={address} />
    </div>
  );
}

export default App;
