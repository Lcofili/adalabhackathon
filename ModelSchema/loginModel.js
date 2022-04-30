const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Register = new Schema({

name: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true,
},
password: {
    type: String,
    required: true
}

}, {timestamps: true})

const loginModel = mongoose.model('logins', Register)
module.exports = loginModel;