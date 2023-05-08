const express = require("express");
const {
  reviewPost,
  reviewGet,
  reviewAverage,
  recommendation,
} = require("../controllers/reviewController");
const router = express.Router();

router
  .post("/", reviewPost)
  .get("/average/:id", reviewAverage)
  .get("/recommendation/:id", recommendation)
  .get("/get-user-reviews", reviewGet);

module.exports = router;
