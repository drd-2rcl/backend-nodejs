const express = require('express');

const app = express();

app.get('/teste', (req, res) => {
  return res.send('EAE');
});

app.listen(3333);