module.exports = (err, _req, res, _next) => res.status(500).json({
    code: 'internalServerError', message: 'Internal server error',
  });
