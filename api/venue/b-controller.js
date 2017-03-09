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


// CategoryRouter.get('/categories/:categoryId/:number', function(req, res){
// 	var number = parseInt(req.params.number)
// 	Category.findOne({
// 		_id: req.params.categoryId
// 	})
// 	.populate({
// 		path: 'posts',
// 		options: {
// 			limit: 1,
// 			skip: number,
// 			sort: {
// 				_id: -1
// 			}
// 		},
// 	})
// 	.exec(function(err, category){
// 		if (err) {
// 			console.log(err);
// 			return res.status(500).json({
// 				message: 'Internal Server Error'
// 			});
// 		}
// 		res.status(200).json(category);
// 	});
// });

// module.exports = CategoryRouter;
// PostRouter.put('/dashboard/post/:postId', passport.authenticate('jwt', {session: false}),
//     function(req, res) {
//     Post.findByIdAndUpdate(req.params.postId, {
//             $set: {
//                 "title": req.body.title,
//                 "content": req.body.content
//             }
//         },
//         function(err) {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).json({
//                     message: 'Internal Server Error'
//                 });
//             }
//             res.status(204).end();
//         });
// });

// module.exports = venueRouter;