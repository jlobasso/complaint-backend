const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost:3306');


// mongoose.connect('mongodb://localhost:27017/complaint');
mongoose.connect('mongodb://localhost:27017/complaint',{useMongoClient: true})
        .then(() => {
 
                // Cuando se realiza la conexión, lanzamos este mensaje por consola
            console.log('La conexión a MongoDB se ha realizado correctamente!!');
        })
        .catch(err => console.log(err));

        

// await mongoose.connect('mongodb://localhost/complaint', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });


module.exports = mongoose;
