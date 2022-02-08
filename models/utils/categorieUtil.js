const { Categorie } = require('..');

const isUniqueCategorie = async (name) => {
  const categorie = await Categorie.findOne({ where: { name } });
  return categorie && categorie.dataValues;
};

const createCategorie = (name) => Categorie.create(name);

module.exports = {
  isUniqueCategorie,
  createCategorie,
};
