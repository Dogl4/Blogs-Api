const { BlogPost, PostsCategory, Category, User } = require('..');

const createPost = async (post) => {
  const newPost = await BlogPost.create(post);
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

module.exports = {
  createPost,
  getAllPostsClean,
};
