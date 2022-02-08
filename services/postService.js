const { postUtil, categorieUtil, userUtil } = require('../models/utils');
const { generateError } = require('../middlewares');

const existsCategorie = async (categorieId) => {
  const exists = await categorieUtil.existsCategorieId(categorieId);
  if (!exists) generateError('BadRequest', '"categoryIds" not found');
};

const createPost = async ({ user, body }) => {
  const { title, content, categoryIds } = body;
  const userDb = await userUtil.getUserByEmail(user);
  await Promise.all(categoryIds.map(async (categoryId) => {
    await existsCategorie(categoryId);
  }));
  const hour = `${new Date()} 0000`;
  const objectPost = { userId: userDb.id, title, content, published: hour, updated: hour };
  const newPost = await postUtil.createPost(objectPost);
  delete newPost.published;
  delete newPost.updated;
  return newPost;
};

module.exports = {
  existsCategorie,
  createPost,
};