const Joi = require('joi');
const { generateError } = require('../middlewares');

module.exports = (req, _res, _next) => {
  if (req.body.categoryIds) generateError('BadRequest', 'Categories cannot be edited');
  const { error } = Joi.object({ title: Joi.string().required(), content: Joi.string().required() })
    .validate(req.body);
  if (error) throw error;
  next();
};
