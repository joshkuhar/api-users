// var CategoryRouter = require('express').Router();
// var Category = require('./categoryModel');

var venueRouter = require('express').Router();
var Venue = require('./venue');

// CategoryRouter.post('/categories', function(req, res) {
// 	console.log('categories endpoint hit');
// 	Category.create(req.body.categories, function(err, categories) {
// 		if (err) {
// 			//console.log(err);
// 			return res.status(500).json({
// 				message: 'Internal Server Error'
// 				});
// 			} 
// 			res.status(200).json(categories);
// 		});   
//     });



venueRouter.post('/venue', function(req, res) {
	Venue.create({venue: req.body.venue}, function(err, venue){
		console.log(req);
		if(err) {
			return res.status(500).json({
				message: 'Internal Server Error'
			});
		}
		res.status(200).json(venue);
	});
});


venueRouter.get('/venue', function(req, res) {
	Venue.find({}, function(err, venues){
		if (err) {
			return res.status(500).json({
				message: 'Internal server stuff'
			});
		}
		res.status(200).json(venues);
	});
});


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

module.exports = venueRouter;