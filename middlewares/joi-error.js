const mapErro = {
  'any.required': 400,
  'string.length': 400,
  'string.email': 400,
  'string.min': 400,
  'string.empty': 400,
};

module.exports = (err, _req, res, next) => {
  if (!err.isJoi) return next(err);
  const status = mapErro[err.details[0].type];
  return res.status(status).json({ message: err.message });
};
