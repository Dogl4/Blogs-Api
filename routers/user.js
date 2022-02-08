const rescue = require('express-rescue');
const router = require('express').Router();
const { userController } = require('../controllers');
const { authJwt } = require('../middlewares');

router.post('/', rescue(userController.registerUser));
router.get('/', authJwt, rescue(userController.getAllUsers));

module.exports = router;
