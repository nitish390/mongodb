var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testDB');

var newCar =  require('./models/car');

var Car = new newCar({
  name: "Mercedes Benz",
  type: "E-Class",
  body: "Silver",
  price: [{body: "40 Lakhs", date: "12/12/12"}],
  fuel: "Petrol"
});

Car.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Car Saved.');
  }
});
