const rescue = require('express-rescue');
const router = require('express').Router();
const { postController } = require('../controllers');
const { authJwt } = require('../middlewares');

router.post('/', authJwt, rescue(postController.registerPost));

module.exports = router;
