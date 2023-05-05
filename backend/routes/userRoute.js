const express = require("express");
const {
  userPostController,
  userGetController,
} = require("../controllers/userController");
const router = express.Router();

router.post("/", userPostController).get("/get-users", userGetController);

module.exports = router;
