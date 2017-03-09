var User = require('./c-model');

exports.post = function(req, res, next) {
	console.log('I was hit');
	User.create({
		user: req.body.user
	})
		.then(function(user){
			res.status(200).json(user);
		})
		.then(function(err){
			next(err);
		});
};

exports.get = function(req, res, next) {
	User.find({})
		.then(function(users){
			res.status(200).json(users);
		})
		.then(function(err){
			next(err);
		});
};
