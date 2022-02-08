const { loginService } = require('../services');
const { login } = require('../schemas');

const connecting = async (req, res, _next) => {
  const { error } = login.validate(req.body);
  if (error) throw error;

  const token = await loginService.loggingIn(req.body);

  res.status(200).json({ token });
};

module.exports = {
  connecting,
};
