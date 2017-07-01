var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Sample entry 
var restaurant = new Schema({
	
	address : {
		building : String,
		coord : [
		],
		street : String,
		zipcode : String
	},
	borough : String,
	cuisine : String,
	grades : [],
	name : String,
	restaurant_id : String
});


module.exports = mongoose.model('Restaurant', restaurant);
