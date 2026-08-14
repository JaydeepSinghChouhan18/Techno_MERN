// const Joi = require("joi");

// const addressSchema = Joi.object({
//   street: Joi.string().max(11).trim().required(),
//   city: Joi.string().max(15).trim().required(),
//   state: Joi.string().max(15).trim().required(),
//   country: Joi.string().max(11).trim().required(),
//   pincode: Joi.string().max(7).trim().required(),
//   user: Joi.string().trim().required(),
//   coordinates: {
//     type: [Number],
//     required: true,
//   },
// });

// module.exports = addressSchema;

const Joi = require("joi");

const addressSchema = Joi.object({
  street: Joi.string().trim().max(50).required(),

  city: Joi.string().trim().max(15).required(),

  state: Joi.string().trim().max(15).required(),

  country: Joi.string().trim().max(50).required(),

  pincode: Joi.string()
    .trim()
    .pattern(/^[0-9]{6}$/)
    .required(),

  longitude: Joi.number().min(-180).max(180).required(),

  latitude: Joi.number().min(-90).max(90).required(),
});

module.exports = addressSchema;
