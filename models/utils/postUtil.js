const { BlogPost } = require('..');

const createPost = async (post) => {
  const newPost = await BlogPost.create(post);
  return newPost.dataValues;
};
module.exports = {
  createPost,
};
