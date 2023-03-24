var express = require('express');
var router = express.Router();
const controller = require('../controllers/users')

router.get('/form', controller.formNew)
router.post('/login', controller.formLogin)
router.post('/', controller.create)
router.post('auth', controller.auth)

module.exports = router;
