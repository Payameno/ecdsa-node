const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const generatePublicKey = require("./scripts/publicKey");

app.use(cors());
app.use(express.json());

const balances = {
  "0xf3e112d852c06b3e4ed48d93e8b43785ee3ae01a": 100,
  "0xbed110e64032b963c387a8ac25ff8b2a89d299dd": 50,
  "0x46a832bbc27923cccfe959fdd1debaed1db22c8f": 75,
};

app.get("/publickey/:privateKey", (req, res) => {
  console.log('req.params', req.params);
  const { privateKey } = req.params;
  const publicKey = generatePublicKey(privateKey);
  res.send( { publicKey } );
});

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {

//receive a signature from front end
//recover public key from that signature

  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
