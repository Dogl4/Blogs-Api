const Joi = require('joi');
const { generateError } = require('../middlewares');

const postEditSchema = (objectPostEdit) => Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
  }).validate(objectPostEdit);

module.exports = (req, _res, next) => {
  if (req.body.categoryIds) generateError('BadRequest', 'Categories cannot be edited');
  const { error } = postEditSchema(req.body);
  if (error) throw error;
  next();
};
