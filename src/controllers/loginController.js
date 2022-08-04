const { loginService } = require('../services');

const connecting = async (req, res, _next) => {
  const token = await loginService.loggingIn(req.body);
  res.status(200).json({ token });
};

module.exports = {
  connecting,
};
