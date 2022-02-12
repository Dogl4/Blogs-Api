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
  const allBlogPost = await BlogPost.findAll({ 
    include: [
      { as: 'user', model: User, attributes: { exclude: ['password'] } },
      { as: 'categories', model: Category },
    ],
  });

  const newAllPost = allBlogPost.map(({ dataValues }) => ({
    ...dataValues,
    user: dataValues.user.dataValues,
    categories: (dataValues.categories.map(({ id, name }) => ({ id, name }))),
  }));
  return newAllPost;
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
