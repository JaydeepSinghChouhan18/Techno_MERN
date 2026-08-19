    const ReviewModel = require("../models/review.model");

 
const createReview = async (req, res) => {
  try {
    const { title, comment, rating, reviewerName } = req.body;

    const alreadyReviewed = await ReviewModel.findOne({ reviewerName, title });
    if (alreadyReviewed) {
      return res.status(400).send("aap ye review pehle de chuke ho");
    }

    const review = await ReviewModel.create({
      title,
      comment,
      rating,
      reviewerName,
    });

    return res.status(201).json(review);
  } catch (err) {
    console.error(err);
    return res.status(500).send("internal server error");
  }
};

// Get reviews with pagination and filtering
const getReviews = async (req, res) => {
  try {
    const { status, minRating, page = 1, limit = 10 } = req.query;

    const filter = {};
    if (status) filter.status = status;
    if (minRating) filter.rating = { $gte: Number(minRating) };

    const reviews = await ReviewModel.find(filter)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    return res.status(200).json(reviews);
  } catch (err) {
    console.error(err);
    return res.status(500).send("error");
  }
};

module.exports = {
  createReview,
  getReviews,
};