const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Listing = require("../models/listings.js");
const Review = require("../models/reviews.js");
const reviewsControllers = require("../controllers/reviews.js");
const {
  isReviewAuthor,
  validateReview,
  isLoggedIn,
} = require("../middlewares.js");

// Post Route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewsControllers.post)
);

// Delete Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewsControllers.delete)
);

module.exports = router;
