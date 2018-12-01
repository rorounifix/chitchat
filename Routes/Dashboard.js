const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("main get")
})

router.post("/", (req, res, next) => {
  res.send("main post")
})

router.put("/", (req, res, next) => {
  res.send("main in put")
})

router.delete("/", (req, res, next) => {
  res.send("main delete")
})

module.exports = router
