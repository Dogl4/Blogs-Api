const { postService } = require('../services');
const { post, editPost } = require('../schemas');

const registerPost = async (req, res, _next) => {
  const { error } = post.validate(req.body);
  if (error) throw error;

  const newPost = await postService.createPost(req);
  res.status(201).json(newPost);
};

const getAllPosts = async (req, res, _next) => {
  const allPosts = await postService.getAllPosts();
  res.status(200).json(allPosts);
};

const getPostById = async (req, res, _next) => {
  const { id } = req.params;
  const postById = await postService.getPostById(id);
  res.status(200).json(postById);
};

const editPostById = async ({ user, body, params }, res, _next) => {
  const { id } = params;
  editPost(body);
  const editedPost = await postService.editPostById({ id: +id, user, body });
  res.status(200).json(editedPost);
};

const deletePostById = async (req, res, _next) => {
  const { id } = req.params;
  await postService.deletePostById({ id: +id, user: req.user });
  res.status(204).end();
};

module.exports = {
  registerPost,
  getAllPosts,
  getPostById,
  editPostById,
  deletePostById,
};
