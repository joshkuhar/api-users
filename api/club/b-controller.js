var Club = require('./c-model');

exports.post = function(req, res, next){
	Club.create({
		club: req.body.club
	})
		.then(function(club){
			res.status(200).json(club);
		})
		.then(function(err){
			next(err);
		});
};

exports.get = function(req, res, next){
	Club.find({})
		.then(function(clubs){
			res.status(200).json(clubs);
		})
		.then(function(err){
			next(err);
		})
};
// clubRouter.post('/club', function(req, res){
// 	Club.create({
// 		club: req.body.club
// 	}, function(err, club){
// 		if (err) {
// 			return res.status(500).json({
// 				message: 'Internal Server Error'
// 			});
// 		}
// 		res.status(200).json(club);
// 	});
// });

// clubRouter.get('/club', function(req, res){
// 	Club.find({},
// 		function(err, clubs){
// 			if (err) {
// 				return res.status(500).json({
// 					message: 'Internal Server Error'
// 				});
// 			}
// 			res.status(200).json(clubs);
// 		});
// });

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
// module.exports = clubRouter;