const rescue = require('express-rescue');
const router = require('express').Router();
const { userController } = require('../controllers');

router.post('/', rescue(userController.registerUser));

module.exports = router;
