const express = require("express");
const { postEventDetails } = require("../controllers/eventsPostController");
const { getEventDetails } = require("../controllers/eventsFetchController");
const router = express.Router();

router.post("/", postEventDetails).get("/event-details", getEventDetails);

module.exports = router;
