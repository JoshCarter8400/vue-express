const express = require("express")
const mongodb = require("mongodb")

const router = express.Router()

router.get("/", (req, res) => {
  res.send("hello")
})


async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect
}

module.exports = router