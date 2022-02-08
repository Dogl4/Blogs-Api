const errorMap = {
  NotFound: 404,
  Conflict: 409,
  BadRequest: 400,
  Unauthorized: 401,
};
// Na dúvida coloque um console.log('err', err);
module.exports = (err, _req, res, next) => ((!err.code || !errorMap[err.code]) ? next(err) 
  : res.status(errorMap[err.code]).json({ message: err.message }));
