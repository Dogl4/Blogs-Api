const { userModel, loginModel } = require('../models');
const { generateError } = require('../middlewares');

const getAll = () => userModel.getAllClear();

const getById = async (id) => {
  const userById = await userModel.getByIdClear(id);
  if (!userById) generateError('NotFound', 'User does not exist');
  return userById;
};

const isUniqueEmail = async (email) => {
  const isUnique = await userModel.isUniqueEmail(email);
  if (isUnique) generateError('Conflict', 'User already registered');
};

const createUser = async (user) => {
  await isUniqueEmail(user.email);
  return userModel.createUser(user);
}

const deleteUserById = async (user) => {
  const userDB = await loginModel.getEmail(user.user);
  if (!userDB) generateError('NotFound', 'User does not exist');
  await userModel.deleteUserById(user);
};

module.exports = {
  getAll,
  isUniqueEmail,
  createUser,
  getById,
  deleteUserById,
};
