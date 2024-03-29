const rescue = require('express-rescue');
const router = require('express').Router();
const { categoryController } = require('../controllers');
const { authJwt } = require('../middlewares');
const { category } = require('../schemas');

router.post('/', authJwt, category, rescue(categoryController.registerCategory));
router.get('/', authJwt, rescue(categoryController.getCategories));

module.exports = router;
