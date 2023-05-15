const express = require("express");
const router = express.Router();
const { addNewUser } = require("../controllers/NewUserController");

router.post("/", addNewUser);

module.exports = router;
