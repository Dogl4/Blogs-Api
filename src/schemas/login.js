const Joi = require('joi');

const loginSchema = (objectLogin) => Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).validate(objectLogin);

module.exports = (req, _res, next) => {
  const { error } = loginSchema(req.body);
  if (error) throw error;
  next();
}
