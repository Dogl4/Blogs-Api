const { userUtil, loginUtil } = require('../models/utils');
const { generateError } = require('../middlewares');

const getAll = () => userUtil.getAllClear();

const getById = async (id) => {
  const userById = await userUtil.getByIdClear(id);
  if (!userById) generateError('NotFound', 'User does not exist');
  return userById;
};

const isUniqueEmail = async (email) => {
  const isUnique = await userUtil.isUniqueEmail(email);
  if (isUnique) generateError('Conflict', 'User already registered');
};

const createUser = (user) => (userUtil.createUser(user));

const deleteUserById = async (user) => {
  const userDB = await loginUtil.getEmail(user.user);
  if (!userDB) generateError('NotFound', 'User does not exist');
  await userUtil.deleteUserById(user);
};

module.exports = {
  getAll,
  isUniqueEmail,
  createUser,
  getById,
  deleteUserById,
};
