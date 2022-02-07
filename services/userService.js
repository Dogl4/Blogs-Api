const userUtil = require('../models/utils/userUtil');

const getAll = () => userUtil.getAllClear();

const isUniqueEmail = async (email) => {
  const isUnique = await userUtil.isUniqueEmail(email);
  // Criando error customizado, tratado no domain-error.js, agradeço ao pablo por me ensinar isto.
  if (isUnique) {
    const e = new Error();
    e.code = 'Conflict';
    e.message = 'User already registered';
    throw e;
  }
};

const createUser = (user) => (userUtil.createUser(user));

module.exports = {
  getAll,
  isUniqueEmail,
  createUser,
};
