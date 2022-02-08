const { User } = require('..');
const generateToken = require('./jwt');

const getAllClear = async () => {
  const users = await User.findAll();
  const dataUsers = users.map((user) => user.dataValues);
  return dataUsers;
};

const getByIdClear = async (id) => {
  const user = await User.findOne({ where: { id } });
  return user && user.dataValues;
};

const isUniqueEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return !!user;
};

const createUser = async (user) => {
  const newUser = await User.create(user);
  const token = await generateToken(newUser);
  return token;
};

module.exports = {
  createUser,
  getAllClear,
  getByIdClear,
  isUniqueEmail,
};
