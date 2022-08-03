const { Op } = require('sequelize');
const { BlogPost, PostsCategory, Category, User } = require('../db/entity');
const { generateError } = require('../middlewares');

const handleDataValue = (array) => array.map(({ dataValues }) => ({
    ...dataValues,
    user: dataValues.user.dataValues,
    categories: (dataValues.categories.map(({ id, name }) => ({ id, name }))),
  }));

const createPost = async (categoryIds, post) => {
  const newPost = await BlogPost.create(post);
  await Promise.all(categoryIds.map(async (categoryId) => {
    PostsCategory.create({ postId: newPost.dataValues.id, categoryId });
  }));
  return newPost.dataValues;
};

const getAllPostsClean = async () => {
  const allBlogPost = await BlogPost.findAll({ 
    include: [{ as: 'user', model: User, attributes: { exclude: ['password'] } },
      { as: 'categories', model: Category }],
  });
  return handleDataValue(allBlogPost);
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

const editPostById = async ({ id, editPost }) => {
  const postById = await BlogPost.findOne({ where: { id }, raw: true });
  if (editPost.userId !== postById.userId) generateError('Unauthorized', 'Unauthorized user');
  const hour = `${new Date()} 0000`;
  const objectPost = { ...editPost, updated: hour };
  await BlogPost.update(objectPost, { where: { id } });
};

const deletePostById = async ({ id, userId }) => {
  const postById = await BlogPost.findOne({ where: { id }, raw: true });
  if (!postById) generateError('NotFound', 'Post does not exist');
  if (userId !== postById.userId) generateError('Unauthorized', 'Unauthorized user');

  await BlogPost.destroy({ where: { id } });
};

const findPostByTitle = async (title) => {
  // <Referêcnias: https://pt.stackoverflow.com/questions/355872/como-utilizar-o-like-do-sql-no-sequelize>
  const postsByTitle = await BlogPost.findAll({ 
    where: {
      // <Referência: https://sequelize.org/v5/variable/index.html#static-variable-Op>
      [Op.or]: [{ title: { [Op.like]: `%${title}%` } }, { content: { [Op.like]: `%${title}%` } }], 
    },
    include: [
      { as: 'user', model: User, attributes: { exclude: ['password'] } },
      { as: 'categories', model: Category },
    ],
  });
  return handleDataValue(postsByTitle);
};

module.exports = {
  createPost,
  getAllPostsClean,
  getPostByIdClean,
  editPostById,
  deletePostById,
  findPostByTitle,
};
