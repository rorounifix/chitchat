const express = require('express');
const router = express.Router();
const users = require('../Methods/Users')
const Crypt = require('cryptr');
const key = process.env.SECRET_KEY
const hash = new Crypt(key)
const jwt = require("jsonwebtoken")

router.post("/", async  (req, res, next) => {

  let result = {
    data:null,
    success:false,
    message:null

  }

  try{
    const user = await users.read({"email":req.body.email})
    if(user.length == 0) throw Error("Invalid Username and Password")
    if(!(hash.decrypt(user[0].password) === req.body.password)) throw Error("Invalid Username and Password")
    const data = {
      "data":user[0].id
    }
    req.headers["Authorization"] = jwt.sign(data, key)
    result['data'] = jwt.sign(data, key)
    result['success'] = true
  }catch(err){
    // console.log(err.message)
    result['message'] = err.message
  }

   res.json(result)
   next()




})

module.exports = router
