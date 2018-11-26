const express = require('express');
const cors = require('cors');
const socket = require('socket.io');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config()

//DB Setup
const mongoDB = 'mongodb://127.0.0.1:27017/development'
try{
  mongoose.connect(mongoDB, { useNewUrlParser: true });
  mongoose.Promise = global.Promise;
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

}catch(err){
  console.log(err.message)
}


//App setup
const app = express();
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//Routers
const main = require('./routes/main');
const Register = require('./routes/Register');
const login = require('./routes/login');

//Routes Setup
app.use('/', main)
app.use('/register', Register)
app.use('/login', login)

const port = process.env.PORT || 3000

const server =  app.listen(port, () => {
  console.log('Listening on port 3000')
})



//Socket Setup
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
