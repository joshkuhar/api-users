var user = require('./user/user-routes');
var router = require('express').Router();

router.use('/user', user);

router.use(function(err, req, res, next) {
  res.status(500).json({
  	message: 'Internal Server Error'
  });
});

module.exports = router;
