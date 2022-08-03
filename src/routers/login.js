const rescue = require('express-rescue');
const router = require('express').Router();
const { loginController } = require('../controllers');

router.post('/', rescue(loginController.connecting));

module.exports = router;
