const express = require('express');
const router = express.Router();
const users = require('../Methods/Users')
const jwt = require('jsonwebtoken')
const { verifyToken, verifyAuth } = require('../Helpers/auth_verification')


router.get("/", async  (req, res, next) => {

  const result = {
    data:null,
    success:false,
    message:null
  }

  try{
    //check Authorization
    const auth = req.headers['authorization']
    const userId = await verifyAuth(auth)
    if(!userId.success) throw Error(userId.data)

    // Get all users lists
    const listUsers = await users.read({}, {"_id":0, password:0, created:0, __v:0})
    result['data'] = listUsers
    result['success'] = true
  }catch(err){
    console.log(err.message)
    result['message'] = err.message
  }
  res.json(result)
})

router.put("/",async  (req, res, next) => {

  const result = {
    data:null,
    success:false,
    message:null
  }

  try{

    const updateUser = await users.read({"email":req.body.email}, {"_id":0, password:0, created:0, __v:0})
    console.log(updateUser)
    result['data'] = updateUser
    result['success'] = true
  }catch(err){
    console.log(err.message)
    result['message'] = err.message
  }
  res.json(result)

})

router.delete("/", (req, res, next) => {
  res.send("main delete")
})

module.exports = router