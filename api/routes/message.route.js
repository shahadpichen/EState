const express = require("express");
const { addMessage } = require("../controllers/message.controller.js");
const { verifyToken } = require("../middleware/verifyToken.js");

const router = express.Router();

router.post("/:id", verifyToken, addMessage);

module.exports = router;
