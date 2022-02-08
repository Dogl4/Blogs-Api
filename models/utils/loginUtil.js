const { User } = require('..');

const getEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user && user.dataValues;
};

module.exports = {
  getEmail,
};
