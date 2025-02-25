// index.js
const express = require('express');
const app = express();
const port = 3001; // Defina a porta conforme necessário

app.get('/', (req, res) => {
  res.send('Backend Express rodando!');
});

app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});