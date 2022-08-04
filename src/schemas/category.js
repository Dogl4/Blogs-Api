const Joi = require('joi');

const categorySchema = (objectCategory) => Joi.object({
  name: Joi.string().required()
}).validate(objectCategory);

module.exports = (req, _res, next) => {
  const { error } = categorySchema(req.body);
  if (error) throw error;
  next();
};
