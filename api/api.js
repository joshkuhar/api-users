var user = require('./user/user-routes');
var router = require('express').Router();

router.use('/user', user);

module.exports = router;
