const express = require("express");
const { getEvents } = require("../controllers/EventsController");
const router = express.Router();

router.get("/", getEvents);

module.exports = router;
