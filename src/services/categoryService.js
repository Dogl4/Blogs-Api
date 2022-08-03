const { categoryModel } = require('../models');
const { generateError } = require('../middlewares');

const isUniqueCategory = async (category) => {
  const isUnique = await categoryModel.isUniqueCategory(category);
  if (isUnique) generateError('Conflict', 'Categorier already registered');
};

const createCategory = ({ name }) => (categoryModel.createCategory({ name }));

const getCategories = () => categoryModel.getCategories();

module.exports = {
  isUniqueCategory,
  createCategory,
  getCategories,
};
