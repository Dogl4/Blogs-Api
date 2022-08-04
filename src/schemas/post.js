const Joi = require('joi');

const postSchema = (objectPost) => Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number().required()).required(),
}).validate(objectPost);

module.exports = (req, _res, next) => {
  const { error } = postSchema(req.body);
  if (error) throw error;
  next();
}
