const { categorieUtil } = require('../models/utils');
const { generateError } = require('../middlewares');

const isUniqueCategorie = async (categorie) => {
  const isUnique = await categorieUtil.isUniqueCategorie(categorie);
  if (isUnique) generateError('Conflict', 'Categorier already registered');
};

const createCategorie = ({ name }) => (categorieUtil.createCategorie({ name }));

module.exports = {
  isUniqueCategorie,
  createCategorie,
};
