const express = require('express');
const router = express.Router();
const users = require('../Methods/Users')
const jwt = require('jsonwebtoken');
const Cryptr = require('cryptr');
const key = process.env.SECRET_KEY
const hash = new Cryptr(key)



router.post("/", async  (req, res, next) => {

  let result = {
    data:null,
    success:false,
    message:null

  }

  const data = {
    name:req.body.name,
    lastname:req.body.lastname,
    email:req.body.email,
    password:hash.encrypt(req.body.password),
    created:Math.round(new Date().getTime() / 1000),
    isActive:true
  }

  try{

    const list = await users.read({"email":req.body.email})
    if(list.length > 0) throw Error("Email already exist")
    const newUser = users.create(data)
    const jwtSign = {
      "userid":newUser._id
    }
    result['data'] = jwt.sign(jwtSign, key)
    result['success'] = true
    result['message'] = "Registered Successful"
    req.headers['Autorization'] = jwt.sign(jwtSign, key)
  }catch(err){
    console.log(err.message)
    result['message'] = err.message
  }

  res.json(result)
})

module.exports = router
