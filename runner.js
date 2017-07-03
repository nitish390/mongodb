var json = require('/Users/Nitish/Downloads/sample2.json');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testDB');
var restaurant = require('./models/restaurant');
//Finally... use insertMany to do a bulk insert into your collection.

// restaurant.insertMany(json, function(err,result) {
//    if (err) {
//      console.log(err)
//    } else {
//      console.log(result)
//    }
// });

// restaurant.findOne({'name':'Kosher Island'},function(err,data){
// 	if(err){
// 		console.log(err)
// 	}
// 	console.log(data)
// })

// restaurant.findOneAndUpdate({'name':'Kosher Island'}, {$set:{borough:'NEW UPDATED'}},function(err,data){
// 	if(err){
// 		console.log(err)
// 	}
// 	console.log(data)
// })

// restaurant.findOne({'name':'Kosher Island'},function(err,data){
// 	if(err){
// 		console.log(err)
// 	}
// 	console.log('Updated',data)
// })

restaurant.aggregate(
    [
        { $group: { "_id": "$borough", "count": { $sum: 1 } } }
    ],
    function(err, data) {
        if (err) {
            console.log(err)
        }
        console.log(data)
    }
)
