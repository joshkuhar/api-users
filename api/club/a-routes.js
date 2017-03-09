var router = require('express').Router();
var controller = require('./b-controller');

router.route('/')
	.get(controller.get)
	.post(controller.post)

module.exports = router