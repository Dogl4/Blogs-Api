const Joi = require('joi');

const userSchema = (objectUser) => Joi.object({
  displayName: Joi.string().min(8),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
}).validate(objectUser);

module.exports = (req, _res, next) => {
  const { error } = userSchema(req.body);
  if (error) throw error;
  next();
};
