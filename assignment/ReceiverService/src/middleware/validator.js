const Joi = require("joi");

const userSchema = Joi.object({
  user: Joi.string().min(3).max(30).required(),
  class: Joi.string().required(),
  age: Joi.number().integer().min(1).max(100).required(),
  email: Joi.string().email().required(),
});

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

module.exports = validateUser;
