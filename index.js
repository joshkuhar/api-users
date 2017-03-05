var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');
var config = require('./config');

var app = express();

app.use(jsonParser); 
app.use(bodyParser.urlencoded({extended: false}));

var Venue = require('./api/venue/venue-router');
var User = require('./api/user/user-router');
var Club = require('./api/club/club-router');

var runServer = function(callback) {
    mongoose.connect(config.DATABASE_URL, function(err) {
        if (err && callback) {
            return callback(err);
        }
        app.listen(config.PORT, function() {
            console.log('Listening on localhost:' + config.PORT);
            if (callback) {
                callback();
            }
        });
    });
};
if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
};
// var venues = [];

// app.get('/venue', function(req, res){
// 	res.json("I work");
// });
// app.post('/venue', function(req, res){
// 	console.log(req.body);
// 	var ven = req.body.venue;
// 	venues.push(ven);
// 	res.json(ven);
// });

//testing
// exports.app = app;
// exports.runServer = runServer;

// var Schema = mongoose.Schema;

// var venueSchema = new Schema({
// 	venue: String
// });

// var Venue = mongoose.model('Venue', venueSchema);


// // var venueRouter = require('express').Router();

// app.post('/venue', function(req, res) {
// 	console.log(req);
// 	Venue.create({venue: req.body.venue}, function(err, venue){
// 		if(err) {
// 			return res.status(500).json({
// 				message: 'Internal Server Error'
// 			});
// 		}
// 		res.status(200).json(venue);
// 	});
// });


// userRouter.get('/', function(req, res, next){
// 	res.send('hola, planet');
// });

// app.use('/', userRouter);

app.use('/', Venue);
app.use('/', User);
app.use('/', Club);
// app.use(function(err, req, res, next){
// 	 console.log("oops");
// 	 res.status(500).send(err);
// });

// app.listen(8080);
