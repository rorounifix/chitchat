const express = require('express');
const router = express.Router();
const users = require('../Methods/Users')
const methods = require('../Methods')



router.post("/", async  (req, res, next) => {

  const data = {
    name:"admin",
    lastname:"adminpanel",
    email:"admin@sample.com",
    password:"password",
    created:Math.round(new Date().getTime() / 1000),
    isActive:true
  }

  users.create('test')

  res.json('test')

})

module.exports = router
