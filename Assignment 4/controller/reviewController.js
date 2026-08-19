const {
  createReviewService,
  getReviewsService,
  getSingleReviewService,
  updateReviewService,
  deleteReviewService,
} = require("../services/review.service");
const statusCode = err.statusCode || 500; 

// 1. Create
const createReview = async (req, res) => {
  try {
    const result = await createReviewService(req.body);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(err.statusCode || 500).json({ error: err.message });
  }
};

// 2. Get All
const getReviews = async (req, res) => {
  try {
    const result = await getReviewsService(req.query);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(statusCode).json({ error: err.message });
  }
};

// 3. Get Single
const getSingleReview = async (req, res) => {
  try {
    const result = await getSingleReviewService(req.params.id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(statusCode).json({ error: err.message });
  }
};

// 4. Update
const updateReview = async (req, res) => {
  try {
    const result = await updateReviewService(req.params.id, req.body);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(statusCode).json({ error: err.message });
  }
};

// 5. Delete
const deleteReview = async (req, res) => {
  try {
    const result = await deleteReviewService(req.params.id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(statusCode).json({ error: err.message });
  }
};

module.exports = {
  createReview,
  getReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
