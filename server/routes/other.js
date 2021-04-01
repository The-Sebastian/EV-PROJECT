const express = require('express');

const router = express.Router();


router.get("/", (req,res) => res.status(200).json("Other router!"));

router.get("/yo", (req,res) => res.status(200).json("Hey yo What's up!"));

module.exports = router;