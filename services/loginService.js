const { loginUtil, generateToken } = require('../models/utils');
const { generateError } = require('../middlewares');

const loggingIn = async ({ email, password }) => {
  const user = await loginUtil.getEmail(email);
  if (!user || user.password !== password) generateError('BadRequest', 'Invalid fields');
  return generateToken({ email, password });
};

module.exports = {
  loggingIn,
};
