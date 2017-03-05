var userRouter = require('express').Router();
var User = require('./user');

userRouter.post('./user', function(req, res) {
	User.create({
		user: req.body.user
	}, function(err, user){
		if(err) {
			return res.status(500).json({
				message: 'Internal Server Error'
			});
		}
		res.status(200).json(user);
	});
});

userRouter.get('/user', function(req, res){
	User.find({}, function(err, users){
		if (err) {
			return res.status(500).json({
				message: 'Internal Server Error'
			});
		}
		res.status(200).json(users);
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

module.exports = User;