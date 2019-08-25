const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:String,
    address:{
        street:String,
        number:String,
    },
    city:String,
});


module.exports = mongoose.model('User', UserSchema);
