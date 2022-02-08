const { categorieService } = require('../services');
const { categorie } = require('../schemas');

const registerCategorie = async (req, res, _next) => {
  const { error } = categorie.validate(req.body);
  if (error) throw error;
  await categorieService.isUniqueCategorie(req.body.name);

  const newCategorie = await categorieService.createCategorie(req.body);
  res.status(201).json(newCategorie);
};

const getCategories = async (_req, res, _next) => {
  const categories = await categorieService.getCategories();

  res.status(200).json(categories);
};

module.exports = {
  registerCategorie,
  getCategories,
};
