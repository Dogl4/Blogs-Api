const rescue = require('express-rescue');
const router = require('express').Router();
const { postController } = require('../controllers');
const { authJwt } = require('../middlewares');

router.post('/', authJwt, rescue(postController.registerPost));
router.get('/', authJwt, rescue(postController.getAllPosts));
router.get('/search', authJwt, rescue(postController.findPostByTitle));
router.get('/:id', authJwt, rescue(postController.getPostById));
router.put('/:id', authJwt, rescue(postController.editPostById));
router.delete('/:id', authJwt, rescue(postController.deletePostById));

module.exports = router;
