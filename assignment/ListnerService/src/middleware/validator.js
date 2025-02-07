const Joi = require("joi");

const userSchema = Joi.object({
  ref: Joi.string().required(),
  user: Joi.string().min(3).max(30).required(),
  class: Joi.string().required(),
  age: Joi.number().integer().min(1).max(100).required(),
  email: Joi.string().email().required(),
  inserted_at: Joi.date().required(),
  modified_at: Joi.date().required(),
});

const validateUserData = (data) => {
  return userSchema.validate(data);
};

module.exports = validateUserData;
