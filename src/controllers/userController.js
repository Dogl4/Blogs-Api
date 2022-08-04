const { userService } = require('../services');

const registerUser = async (req, res, _next) => {
  const token = await userService.createUser(req.body);
  res.status(201).json({ token });
};

const getAllUsers = async (_req, res, _next) => {
  const users = await userService.getAll();
  res.status(200).json(users);
};

const getByIdUser = async (req, res, _next) => {
  const { id } = req.params;
  const userById = await userService.getById(+id);
  res.status(200).json(userById);
};

const deleteUserById = async (req, res, _next) => {
  await userService.deleteUserById({ user: req.user });
  res.status(204).end();
};

module.exports = {
  registerUser,
  getAllUsers,
  getByIdUser,
  deleteUserById,
};
