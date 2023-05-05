const express = require("express");
const {
  scheduledEventPost,
  scheduledEventGet,
} = require("../controllers/scheduledEventController");
const router = express.Router();

router
  .post("/", scheduledEventPost)
  .get("/get-scheduled-events", scheduledEventGet);

module.exports = router;
