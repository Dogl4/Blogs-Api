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

   const getPost = await BlogPost.findOne({
    where: { id },
    include: [
      { as: 'user', model: User, attributes: { exclude: ['password'] } },
      { as: 'categories', model: Category },
    ] });

    const newGetPost = {
      ...getPost.dataValues,
      user: getPost.dataValues.user.dataValues,
      categories: (getPost.dataValues.categories.map((e) => ({ id: e.id, name: e.name }))),
    };
  return newGetPost;
};

module.exports = {
  createPost,
  getAllPostsClean,
  getPostByIdClean,
};
