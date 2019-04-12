const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://drd-2rcl:drd-2rcl@cluster0-w3p1h.mongodb.net/test?retryWrites=true', {
  useNewUrlParser: true
});

// cadastrar um módulo(middleware) no express (app.use)
// express.json() => é um middleware que ajuda o servidor a entender as requisições que chegam em formato JSON
app.use(express.json());
// express.urlencoded() => permite o envio de arquivos nas requisições
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(3333);