var json = require('/Users/Nitish/Downloads/sample2.json');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testDB');
var restaurant = require('./models/restaurant');
//Finally... use insertMany to do a bulk insert into your collection.

restaurant.insertMany(json, function(err,result) {
   if (err) {
     console.log(err)
   } else {
     console.log(result)
   }
});