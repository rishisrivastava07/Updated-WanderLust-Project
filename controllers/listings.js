const Listing = require("../models/listings");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_ACCESS_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res, next) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.new = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.post = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();
  
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  
  newListing.geometry = response.body.features[0].geometry;
  let savedListing = await newListing.save();
  // console.log(savedListing);
  
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

module.exports.show = async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing you requested for does not exists !");
    res.redirect("/listings");
  }
  // console.log(listing);
  res.render("listings/show.ejs", { listing });
};

module.exports.edit = async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exists !");
    res.redirect("/listings");
  }

  let originalImageURL = listing.image.url;
  originalImageURL = originalImageURL.replace("/upload", "/upload/w_300");
  res.render("listings/edit.ejs", { listing, originalImageURL });
};

module.exports.put = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file != "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filname };
    await listing.save();
  }
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteGet = async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
};

module.exports.deleteID = async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findByIdAndDelete(id, {
    ...req.body.listing,
  });
  req.flash("success", "Deleted Successfully");
  res.redirect(`/listings/`);
};
