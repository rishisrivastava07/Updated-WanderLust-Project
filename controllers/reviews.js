const Listing = require("../models/listings");
const Review = require("../models/reviews");

module.exports.post = async (req, res, next) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  // console.log(newReview);

  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();

  // console.log("newReview saved");
  // res.send("new review saved");
  req.flash("success", "Review added successfully");
  res.redirect(`/listings/${listing._id}`);
};

module.exports.delete = async (req, res, next) => {
  let { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { review: reviewId } });
  await Review.findByIdAndDelete(reviewId);

  req.flash("success", "Review deleted successfully");
  res.redirect(`/listings/${id}`);
};
