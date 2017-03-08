var router = require('express').Router();
var controller = require('./user-controller');

router.route('/')
	.get(controller.get);

module.exports = router;