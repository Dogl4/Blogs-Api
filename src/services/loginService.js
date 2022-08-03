const { loginModel } = require('../models');
const { generateError, generateToken } = require('../middlewares');

const loggingIn = async ({ email, password }) => {
  const user = await loginModel.getEmail(email);
  if (!user || user.password !== password) generateError('BadRequest', 'Invalid fields');
  return generateToken({ email, password });
};

module.exports = {
  loggingIn,
};
