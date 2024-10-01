const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    } ,
    email: {
        type: String,
        required: true
    } ,
    password: {
        type: String,
        required: true
    } ,
});
  //model(create collection)
    const SignIN = mongoose.model('signin', newSchema);

    module.exports = SignIN;


