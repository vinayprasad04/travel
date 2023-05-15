const express = require("express");
const { getEvents } = require("../controllers/EventsController");
const { rescheduleEvents } = require("../controllers/EventsController");
const router = express.Router();

router.get("/", getEvents);
router.post("/reschedule", rescheduleEvents);

module.exports = router;
