var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testDB');

var newCar =  require('./models/car');
