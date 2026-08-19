const express = require("express");
const router = express.Router();

const {
  createReview,
  getReviews,
  getSingleReview,
  updateReview,
  deleteReview,
} = require("../controllers/review.controller");

const {
  createReviewSchema,
  getReviewsSchema,
  reviewIdSchema,
  updateReviewSchema,
  validate,
} = require("../validations/review.validation");

router.post(
  "/createReview",
  validate(createReviewSchema, "body"),
  createReview,
);

router.get("/getReviews", validate(getReviewsSchema, "query"), getReviews);

router.get(
  "/getSingleReview/:id",
  validate(reviewIdSchema, "params"),
  getSingleReview,
);

router.patch(
  "/updateReview/:id",
  validate(reviewIdSchema, "params"),
  validate(updateReviewSchema, "body"),
  updateReview,
);

router.delete(
  "/deleteReview/:id",
  validate(reviewIdSchema, "params"),
  deleteReview,
);

module.exports = router;
