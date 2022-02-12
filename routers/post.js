const rescue = require('express-rescue');
const router = require('express').Router();
const { postController } = require('../controllers');
const { authJwt } = require('../middlewares');

router.post('/', authJwt, rescue(postController.registerPost));
router.get('/', authJwt, rescue(postController.getAllPosts));
router.get('/:id', authJwt, rescue(postController.getPostById));

module.exports = router;
