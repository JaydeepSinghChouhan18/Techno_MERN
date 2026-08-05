const joi = require("joi");

const createProductSchema = Joi.object({
  name: Joi.string().trim().min(2).max(30).required(),

  SKU: Joi.string().required().unique().uppercase().trim(),
  description: Joi.string().max(100).required(),
  price: Joi.number().required().min(0),
  category: Joi.string().required().trim(),
});

module.exports = createProductSchema;
