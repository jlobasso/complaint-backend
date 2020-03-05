const mongoose = require('./connect'),
      Schema = mongoose.Schema;

const schemas = {
 
    Person: new Schema({
        name: {
          first: String,
          last: String
        },
        email: {
          type: String,
          required: true,
          index: {
            unique: true,
            sparse: true
          }
        },
        alive: Boolean
      })
    

};

module.exports = schemas;