const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');


const app = express();
app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
  socket.on('connectRoom', box => {
    socket.join(box);
  })
})

mongoose.connect(
  'mongodb+srv://drd-2rcl:drd-2rcl@cluster0-w3p1h.mongodb.net/test?retryWrites=true', 
  {
    useNewUrlParser: true
  }
);

app.use((req, res, next) => {
  req.io = io;

  return next();
})

// cadastrar um módulo(middleware) no express (app.use)
// express.json() => é um middleware que ajuda o servidor a entender as requisições que chegam em formato JSON
app.use(express.json());
// express.urlencoded() => permite o envio de arquivos nas requisições
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(require('./routes'));

server.listen(process.env.PORT || 3333);