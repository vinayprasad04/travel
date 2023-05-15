const express = require("express");
const router = express.Router();

const { UserLogin } = require("../controllers/LoginController");

router.post("/", UserLogin);

module.exports = router;
