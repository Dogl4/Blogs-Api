const { categoryUtil } = require('../models/utils');
const { generateError } = require('../middlewares');

const isUniqueCategory = async (category) => {
  const isUnique = await categoryUtil.isUniqueCategory(category);
  if (isUnique) generateError('Conflict', 'Categorier already registered');
};

const createCategory = ({ name }) => (categoryUtil.createCategory({ name }));

const getCategories = () => categoryUtil.getCategories();

module.exports = {
  isUniqueCategory,
  createCategory,
  getCategories,
};
