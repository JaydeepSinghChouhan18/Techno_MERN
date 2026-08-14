const joi = require("joi");

const createProductSchema = joi.object({
  seller:joi.required().,
  name: joi.string().trim().min(2).max(30).required(),
  SKU: joi.string().required().uppercase().trim(),
  description: joi.string().max(100).required(),
  price: joi.number().required().min(0),
  category: joi.string().required().trim(),
});

const updateProductSchema = joi.object({
  name: joi.string().trim().min(2).max(30).required(),
  SKU: joi.string().required().uppercase().trim(),
  description: joi.string().max(100).required(),
  price: joi.number().required().min(0),
  category: joi.string().required().trim(),
});

module.exports = { createProductSchema, updateProductSchema };
