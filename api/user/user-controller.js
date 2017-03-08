// var userRouter = require('express').Router();
var User = require('./user-model');
// var router = require('express').router();

// userRouter.post('/user', function(req, res) {
// 	User.create({
// 		user: req.body.user
// 	}, function(err, user){
// 		if(err) {
// 			return res.status(500).json({
// 				message: 'Internal Server Error'
// 			});
// 		}
// 		res.status(200).json(user);
// 	});
// });

// userRouter.get('/user', function(req, res){
// 	User.find({}, function(err, users){
// 		if (err) {
// 			return res.status(500).json({
// 				message: 'Internal Server Error'
// 			});
// 		}
// 		res.status(200).json(users);
// 	});
// });


// module.exports = userRouter;

exports.get = function(req, res) {
	User.find({}, function(err, users){
		if(err) {
			return res.status(500).json({
				message: 'Internal Server Error'
			});
		}
		res.status(200).json(users);
	});
};