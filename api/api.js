var user = require('./user/a-routes');
var venue = require('./venue/a-routes');
var router = require('express').Router();

router.use('/user', user);
router.use('/venue', venue);

router.use(function(err, req, res, next) {
  res.status(500).json({
  	message: 'Internal Server Error'
  });
});

module.exports = router;
