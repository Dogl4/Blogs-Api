const { categoryService } = require('../services');

const registerCategory = async (req, res, _next) => {
  const newCategory = await categoryService.createCategory(req.body);
  res.status(201).json(newCategory);
};

const getCategories = async (_req, res, _next) => {
  const categories = await categoryService.getCategories();
  res.status(200).json(categories);
};

module.exports = {
  registerCategory,
  getCategories,
};
