const rescue = require('express-rescue');
const router = require('express').Router();
const { loginController } = require('../controllers');
const { login } = require('../schemas');

router.post('/', login, rescue(loginController.connecting));

module.exports = router;
