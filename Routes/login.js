const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {

  res.send("log in get")

})

router.post("/", (req, res, next) => {

  res.send("login post")

})

router.put("/", (req, res, next) => {

  res.send("log in put")

})

router.delete("/", (req, res, next) => {
  
  res.send("login delete")

})

module.exports = router
