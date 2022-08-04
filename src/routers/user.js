const rescue = require('express-rescue');
const router = require('express').Router();
const { userController } = require('../controllers');
const { authJwt } = require('../middlewares');
const { user } = require('../schemas');

router.post('/', user, rescue(userController.registerUser));
router.get('/', authJwt, rescue(userController.getAllUsers));
router.get('/:id', authJwt, rescue(userController.getByIdUser));
router.delete('/me', authJwt, rescue(userController.deleteUserById));

module.exports = router;
