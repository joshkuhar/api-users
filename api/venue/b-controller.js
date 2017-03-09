var Venue = require('./c-model');

exports.post = function(req, res, next) {
	Venue.create({
		venue: req.body.venue
	})
		.then(function(venue){
			res.status(200).json(venue);
		})
		.then(function(err){
			next(err);
		});
};

exports.get = function(req, res, next) {
	Venue.find({})
		.then(function(venues){
			res.status(200).json(venues);
		})
		.then(function(err){
			next(err);
		});
};

exports.getOne = function(req, res, next) {
	Venue.findOne({
		venue: req.params.place
	})
		.then(function(venue){
			res.status(200).json(venue);
		})
		.then(function(err){
			next(err);
		})
};