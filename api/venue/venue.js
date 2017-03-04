var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var venueSchema = new Schema({
	venue: String
});

var Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;