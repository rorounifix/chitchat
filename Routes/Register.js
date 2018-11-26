const express = require('express');
const router = express.Router();
const Create = require('../Methods/create')



router.post("/", (req, res, next) => {

  const data = {
    name:"admin",
    lastname:"adminpanel",
    email:"admin@sample.com",
    password:"password",
    created:Math.round(new Date().getTime() / 1000),
    isActive:true
  }

  Create(data)
  res('true')

})

module.exports = router
