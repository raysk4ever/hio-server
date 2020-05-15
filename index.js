const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`running at ${PORT}`));

global.io = require('socket.io')(server, {
  serveClient: false,
  pingInterval: 1000,
  pingTimeout: 5000,
  cookie: false
});

//db
require('./startup/db')();

//socket
require('./startup/io')(io);

