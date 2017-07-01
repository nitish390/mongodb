var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var car = new Schema({
  name:  String,
  type: String,
  body:   String,
  price: [{ body: String, date: String }],
  fuel : String
});


module.exports = mongoose.model('Car', car);