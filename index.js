const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const tokens = [
  { name: "GrimFrog", ticker: "GRIM", price: 0.03, volume: 104, marketcap: 750 },
  { name: "DogeRocket", ticker: "ROCKT", price: 0.08, volume: 240, marketcap: 2100 },
  { name: "ElonPump", ticker: "PUMP", price: 0.02, volume: 130, marketcap: 860 },
];

app.get('/tokens', (req, res) => {
  res.json(tokens);
});

app.get('/', (req, res) => {
  res.send("Memegame backend works!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server kører på http://localhost:${port}`);
});
