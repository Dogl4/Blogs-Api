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

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user ? user.dataValues : null;
};

const createUser = async (user) => {
  const newUser = await User.create(user);
  const token = await generateToken(newUser);
  return token;
};

const deleteUserById = async ({ user }) => {
  const { id } = await getUserByEmail(user);
  await User.destroy({ where: { id } });
};

module.exports = {
  createUser,
  getAllClear,
  getByIdClear,
  isUniqueEmail,
  getUserByEmail,
  deleteUserById,
};
