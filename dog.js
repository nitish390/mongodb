var mongoose = require('mongoose');
mongoose.connect('mongodb://nitish:comnitish@ds032340.mlab.com:32340/comnitish');

var bulldog = mongoose.model('bulldog', { name: String ,age:Number,collar_id:String});

var bulldog = new bulldog({ name: 'Moti' ,age:5,collar_id:"MOTI1"});
bulldog.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Bark');
  }
});