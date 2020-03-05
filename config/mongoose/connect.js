const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost:3306');
// mongoose.connect('mongodb://localhost:27017/complaint');

mongoose.connect('mongodb://localhost:27017/complaint', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => { 
    // Cuando se realiza la conexión, lanzamos este mensaje por consola
    console.log('MongoDB connection');
})
  .catch(err => console.log(err));

module.exports = mongoose;
