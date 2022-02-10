const { postService } = require('../services');
const { post } = require('../schemas');

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

module.exports = {
  registerPost,
  getAllPosts,
};
