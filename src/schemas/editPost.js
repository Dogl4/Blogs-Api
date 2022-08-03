const Joi = require('joi');
const { generateError } = require('../middlewares');

module.exports = (reqBody) => {
  if (reqBody.categoryIds) generateError('BadRequest', 'Categories cannot be edited');
  const { error } = Joi.object({ title: Joi.string().required(), content: Joi.string().required() })
    .validate(reqBody);
  if (error) throw error;
};
