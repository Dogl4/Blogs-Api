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

const editPostById = async (req, res, _next) => {
  // const { id } = req.params;
  editPost(req.body);

  // const editedPost = await postService.editPostById(id, req);
  // res.status(200).json(editedPost);
  res.status(200).json({ message: 'Calma que vai funcionar editPosById' });
};

module.exports = {
  registerPost,
  getAllPosts,
  getPostById,
  editPostById,
};
