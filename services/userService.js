const { userUtil } = require('../models/utils');
const { generateError } = require('../middlewares');

const getAll = () => userUtil.getAllClear();

const isUniqueEmail = async (email) => {
  const isUnique = await userUtil.isUniqueEmail(email);
  if (isUnique) generateError('Conflict', 'User already registered');
};

const createUser = (user) => (userUtil.createUser(user));

module.exports = {
  getAll,
  isUniqueEmail,
  createUser,
};
