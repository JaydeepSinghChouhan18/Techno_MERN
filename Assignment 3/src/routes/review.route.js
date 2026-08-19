const express = require("express");
const router = express.Router();
const { createReview, getReviews } = require("../controllers/review.controller");

 router.post("/createReview", createReview);

 router.get("/getReviews", getReviews);

module.exports = router;