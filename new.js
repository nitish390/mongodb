var mongoose = require('mongoose');
mongoose.connect('mongodb://nitish:comnitish@ds032340.mlab.com:32340/comnitish');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});