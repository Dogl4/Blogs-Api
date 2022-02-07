const errorMap = {
  NotFound: 404,
  Conflict: 409,
};

module.exports = (err, _req, res, next) => ((!err.code || !errorMap[err.code]) ? next(err) 
  : res.status(errorMap[err.code]).json({ message: err.message }));
