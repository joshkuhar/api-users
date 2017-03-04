var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clubSchema = new Schema({
	club: String
});

var Club = mongoose.model('Club', clubSchema);

module.exports = Club;