const jwt = require('jsonwebtoken');
const generateError = require('./generateError');

const { JWT_SECRET } = process.env;

const jwtConfig = { algorithm: 'HS256', expiresIn: '1d' };

module.exports = (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) generateError('Unauthorized', 'Token not found');

  jwt.verify(token, JWT_SECRET, jwtConfig, (err, decoded) => {
    if (err) generateError('Unauthorized', 'Expired or invalid token');

    req.user = decoded.userEmail;
    next();
  });
};
