const express = require("express");
const {
  eventOperationPost,
  eventOperationGet,
} = require("../controllers/eventOperationController");

const router = express.Router();

router.post("/", eventOperationPost).get("/operated", eventOperationGet);

module.exports = router;
