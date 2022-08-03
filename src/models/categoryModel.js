const { Category } = require('../db/entity');

const isUniqueCategory = async (name) => {
  const category = await Category.findOne({ where: { name } });
  return category && category.dataValues;
};

const existsCategoryId = async (id) => {
  const category = await Category.findOne({ where: { id } });
  return category && category.dataValues;
};

const createCategory = (name) => Category.create(name);

const getCategories = async () => {
  const categories = await Category.findAll();
  return categories.map((category) => category.dataValues);
};

module.exports = {
  isUniqueCategory,
  existsCategoryId,
  createCategory,
  getCategories,
};
