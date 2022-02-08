const { userService } = require('../services');
const { user } = require('../schemas');

const registerUser = async (req, res, _next) => {
  const { error } = user.validate(req.body);
  if (error) throw error;
  await userService.isUniqueEmail(req.body.email);

  const token = await userService.createUser(req.body);
  res.status(201).json({ token });
};

module.exports = {
  registerUser,
};
