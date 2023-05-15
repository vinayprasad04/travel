const express = require("express");
const { addReview } = require("../controllers/ratingsController");
const router = express.Router();

router.post("/", addReview);

module.exports = router;
