const mongoose = require('mongoose');

const User = new mongoose.Schema({
  firstname:String,
  lastname:String,
  email:String,
  password:String,
  created:Number,
  isActive:Boolean
});

module.exports = mongoose.model("User", User);
