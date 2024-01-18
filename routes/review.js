const express = require("express");
const review = require("../models/reviews.js"); // Adjust the path based on your actual file structure
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { createReview } = require("../controllers/review.js");

const reviewController = require("../controllers/review.js");

// Reviews POST Route
router.post("/", wrapAsync(reviewController.createReview));

// delete review Route
router.delete("/:reviewId", wrapAsync(reviewController.destroyReview));

module.exports = router;
