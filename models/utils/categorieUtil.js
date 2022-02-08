const { Categorie } = require('..');

const isUniqueCategorie = async (name) => {
  const categorie = await Categorie.findOne({ where: { name } });
  return categorie && categorie.dataValues;
};

const existsCategorieId = async (id) => {
  const categorie = await Categorie.findOne({ where: { id } });
  return categorie && categorie.dataValues;
};

const createCategorie = (name) => Categorie.create(name);

const getCategories = async () => {
  const categories = await Categorie.findAll();
  return categories.map((categorie) => categorie.dataValues);
};

module.exports = {
  isUniqueCategorie,
  existsCategorieId,
  createCategorie,
  getCategories,
};
