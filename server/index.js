const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const generatePublicKey = require("./scripts/publicKey");

app.use(cors());
app.use(express.json());

const balances = {
  "0xcb0e6375262bf7040c79833d67b4b0c89f35b750": 100,
  "0x79081621a4d8bb813093bd34a770bbad01f73b3e": 50,
  "0x334b0a7512e4939813f100c71f4d0d59d3fe11a6": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.get("/publicKey/:privkey", (req, res) => {
  const { privkey } = req.params;
  const publicKey = generatePublicKey(privkey);
  res.send({ publicKey });
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
