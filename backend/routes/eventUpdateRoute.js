const express = require("express");
const {
  updateEventController,
} = require("../controllers/eventUpdateController");

const router = express.Router();

router.put("/update/:id", updateEventController);

module.exports = router;
