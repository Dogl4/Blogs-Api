const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateToken = (user) => {
  const jwtOptions = {
    algorithm: 'HS256',
    expiresIn: '1d',
    subject: user.email,
  };
  const payload = { isAdmin: false, userEmail: user.email };
  const token = jwt.sign(payload, JWT_SECRET, jwtOptions);

  return token;
};

module.exports = generateToken;
