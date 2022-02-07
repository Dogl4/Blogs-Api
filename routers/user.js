const rescue = require('express-rescue');
const router = require('express').Router();
const user = require('../controllers/userController');

router.post('/', rescue(user.registerUser));

module.exports = router;
