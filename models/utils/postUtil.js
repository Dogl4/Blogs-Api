const { BlogPost, PostsCategory, Category, User } = require('..');
const { generateError } = require('../../middlewares');

const createPost = async (categoryIds, post) => {
  const newPost = await BlogPost.create(post);
  await Promise.all(categoryIds.map(async (categoryId) => {
    PostsCategory.create({ postId: newPost.dataValues.id, categoryId });
  }));
  return newPost.dataValues;
};

const getAllPostsClean = async () => {
  const allPostsCategory = await PostsCategory.findAll({ raw: true });
  const allPosts = await Promise.all(allPostsCategory.map(async ({ postId, categoryId }) => {
    const postClean = await BlogPost.findOne({ where: { id: postId }, raw: true });
  
    const categoryClean = await Category.findOne({ where: { id: categoryId }, raw: true });
  
    const categoryByUser = await BlogPost.findOne({
       where: { id: postId }, include: { model: User, as: 'user' } });
    const userClean = categoryByUser.dataValues.user.dataValues;
  
    return ({ ...postClean, user: userClean, categories: [categoryClean] });
  }));

  return allPosts;
};

const getPostByIdClean = async (id) => {
  const post = await BlogPost.findOne({ where: { id }, raw: true });
  if (!post) generateError('NotFound', 'Post does not exist');
  const categories = await PostsCategory.findAll({ where: { postId: id }, raw: true });
  const category = await Category.findOne({ where: { id: categories[0].categoryId }, raw: true });
  const user = await User.findOne({ where: { id: post.userId }, raw: true });

  return ({ ...post, user, categories: [category] });
};

module.exports = {
  createPost,
  getAllPostsClean,
  getPostByIdClean,
};
