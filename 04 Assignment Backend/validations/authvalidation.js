const Joi = require("joi"); 

const roles = {
  admin: "admin",
  user: "user ",
  seller: "seller",
  guest: "guest",
};

const registerSchema = Joi.object({
  name: Joi.string().trim().min(3).max(30).required(),

  email: Joi.string().email().required(),

  password: Joi.string().min(6).max(20).required(),

  role: Joi.string().max(6).default("user").required().lowercase().valid(...Object.values(roles)),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = {
  registerSchema,
  loginSchema,
};
