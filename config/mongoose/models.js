const mongoose = require('./connect');
mongoose.userSchema = require('./schemas').userSchema;

const models = {

User: mongoose.model('user', userSchema)

};

module.exports = models;