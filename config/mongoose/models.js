const mongoose = require('./connect'),
userSchema = require('./schemas').userSchema;

const models = {

    User: mongoose.model('user', userSchema)

};

module.exports = models;