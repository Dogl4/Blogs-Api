const { postUtil, categoryUtil, userUtil } = require('../models/utils');
const { generateError } = require('../middlewares');

const existsCategorie = async (categorieId) => {
  const exists = await categoryUtil.existsCategoryId(categorieId);
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
  const newPost = await postUtil.createPost(categoryIds, objectPost);
  delete newPost.published;
  delete newPost.updated;
  return newPost;
};

const getAllPosts = async () => {
  const allPosts = await postUtil.getAllPostsClean();
  return allPosts;
};

const getPostById = async (id) => {
  const postById = await postUtil.getPostByIdClean(id);
  return postById;
};

const editPostById = async ({ user/* , body */ }) => {
  const userDb = await userUtil.getUserByEmail(user);
  if (!userDb) generateError('Unauthorized', 'Unauthorized user');
  
  // const { title, content } = body;
  // const postById = await postUtil.getPostByIdClean(id);
};

module.exports = {
  existsCategorie,
  createPost,
  getAllPosts,
  getPostById,
  editPostById,
};
