const express = require('express');
const cors = require('cors');
const socket = require('socket.io');

//App setup
const app = express();
app.use(cors())

const server =  app.listen(3000, () => {
  console.log('Listening on port 3000')
})

//Socket setup
const io = socket(server);

io.on('connection', (socket) => {
  console.log("connected : ", socket.id)

  socket.on('chat', (data) => {
    io.sockets.emit('chat', {
      user:data.user,
      message:data.message
    })
  })



  socket.on('typing', (data) => {
    io.sockets.emit('typing', data)
  })



})
