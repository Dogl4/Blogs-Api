const router = require('express').Router();
const rescue = require('express-rescue');
const { postController } = require('../controllers');
const { authJwt } = require('../middlewares');
const { post, editPost } = require('../schemas');

router.post('/', authJwt, post, rescue(postController.registerPost));
router.get('/', authJwt, rescue(postController.getAllPosts));
router.get('/search', authJwt, rescue(postController.findPostByTitle));
router.get('/:id', authJwt, rescue(postController.getPostById));
router.put('/:id', authJwt, editPost, rescue(postController.editPostById));
router.delete('/:id', authJwt, rescue(postController.deletePostById));

module.exports = router;
