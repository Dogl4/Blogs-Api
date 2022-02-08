const rescue = require('express-rescue');
const router = require('express').Router();
const { categorieController } = require('../controllers');
const { authJwt } = require('../middlewares');

router.post('/', authJwt, rescue(categorieController.registerCategorie));

module.exports = router;
