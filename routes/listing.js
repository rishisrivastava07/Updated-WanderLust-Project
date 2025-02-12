const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { validateListing, isLoggedIn, isOwner } = require("../middlewares.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingController.post));

// Create Route - New Route
router.get("/new", isLoggedIn, listingController.new);

// Show Route
router
  .route("/:id")
  .get(wrapAsync(listingController.show))
  .put(isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(listingController.put))
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteID));

// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.edit));

// Delete Route - Get ID
router.get("/:id/delete", isLoggedIn, wrapAsync(listingController.deleteGet));

module.exports = router;
