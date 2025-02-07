const express = require("express");
const { createUserController } = require("../controller/ReceiverController");
const validateUser = require("../middleware/validator");

const router = express.Router();

router.post("/", validateUser, createUserController);

module.exports = router;
