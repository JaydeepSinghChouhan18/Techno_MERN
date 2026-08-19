const Joi = require("joi");

// Custom hex string check for MongoDB ObjectId (24 hex characters)
const objectIdPattern = /^[0-9a-fA-F]{24}$/;

// 1. createReviewSchema (body)
const createReviewSchema = Joi.object({
  title: Joi.string().trim().min(3).max(80).required(),
  comment: Joi.string().trim().min(10).max(500).required(),
  rating: Joi.number().integer().min(1).max(5).required(),
  reviewerName: Joi.string().trim().min(2).max(50).required(),
});

// 2. getReviewsSchema (query)
const getReviewsSchema = Joi.object({
  status: Joi.string().valid("pending", "approved", "rejected").optional(),
  minRating: Joi.number().min(1).max(5).optional(),
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(20).default(10),
});

// 3. reviewIdSchema (params)
const reviewIdSchema = Joi.object({
  id: Joi.string().pattern(objectIdPattern).required().messages({
    "string.pattern.base": "Invalid MongoDB ObjectId",
  }),
});

// 4. updateReviewSchema (body)
const updateReviewSchema = Joi.object({
  title: Joi.string().trim().min(3).max(80),
  comment: Joi.string().trim().min(10).max(500),
  rating: Joi.number().integer().min(1).max(5),
  reviewerName: Joi.string().trim().min(2).max(50),
}).min(1);

// Reusable Validation Middleware
const validate = (schema, property = "body") => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[property], {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const errorMessages = error.details.map((detail) => detail.message);
      return res.status(400).json({ errors: errorMessages });
    }

    req[property] = value; // defaults aur stripped values assign karne ke liye
    next();
  };
};

module.exports = {
  createReviewSchema,
  getReviewsSchema,
  reviewIdSchema,
  updateReviewSchema,
  validate,
};