const { categorieService } = require('../services');
const { categorie } = require('../schemas');

const registerCategorie = async (req, res, _next) => {
  const { error } = categorie.validate(req.body);
  if (error) throw error;
  await categorieService.isUniqueCategorie(req.body.name);

  const newCategorie = await categorieService.createCategorie(req.body);
  res.status(201).json(newCategorie);
};

module.exports = {
  registerCategorie,
};
