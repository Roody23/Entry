const express = require("express");
const router = express.Router();
const entryController = require("./entryController");

router.post("/postEntry", entryController.postEntry);

module.exports = router;
