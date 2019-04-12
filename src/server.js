const express = require('express');

const app = express();

// cadastrar um módulo(middleware) no express (app.use)
// express.json() => é um middleware que ajuda o servidor a entender as requisições que chegam em formato JSON
app.use(express.json());
// express.urlencoded() => permite o envio de arquivos nas requisições
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(3333);