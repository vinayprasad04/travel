const express = require("express");
const { reviewPost, reviewGet } = require("../controllers/reviewController");
const router = express.Router();

router.post("/", reviewPost).get("/get-user-reviews", reviewGet);

module.exports = router;
