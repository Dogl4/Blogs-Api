const { postModel, categoryModel, userModel } = require('../models');
const { generateError } = require('../middlewares');

const existsCategorie = async (categorieId) => {
  const exists = await categoryModel.existsCategoryId(categorieId);
  if (!exists) generateError('NotFound', '"categoryIds" not found');
};

const createPost = async ({ user, body }) => {
  const { title, content, categoryIds } = body;
  const userDb = await userModel.getUserByEmail(user);
  if (!userDb) generateError('NotFound', '"user" not found in database');
  await Promise.all(categoryIds.map(async (categoryId) => {
    await existsCategorie(categoryId);
  }));
  const hour = `${new Date()} 0000`;
  const objectPost = { userId: userDb.id, title, content, published: hour, updated: hour };
  const newPost = await postModel.createPost(categoryIds, objectPost);
  delete newPost.published;
  delete newPost.updated;
  return newPost;
};

const getAllPosts = async () => {
  const allPosts = await postModel.getAllPostsClean();
  return allPosts;
};

const getPostById = async (id) => {
  const postById = await postModel.getPostByIdClean(id);
  return postById;
};

const editPostById = async ({ id, user, body: { title, content } }) => {
  const userDb = await userModel.getUserByEmail(user);
  const { categories } = await postModel.getPostByIdClean(id);
  const editPost = { userId: userDb.id, title, content };
  await postModel.editPostById({ id, editPost });
  return { title, content, userId: userDb.id, categories };
};

const deletePostById = async (params) => {
  console.log(params);
  const { id, user } = params;
  const userDb = await userModel.getUserByEmail(user);
  await postModel.deletePostById({ id, userId: userDb.id });
};

const findPostByTitle = async ({ title }) => {
  const postsByTitle = await postModel.findPostByTitle(title);
  return postsByTitle;
};

module.exports = {
  existsCategorie,
  createPost,
  getAllPosts,
  getPostById,
  editPostById,
  deletePostById,
  findPostByTitle,
};
