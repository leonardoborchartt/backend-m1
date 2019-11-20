const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    name:String,
    says:String,

});


module.exports = mongoose.model('Comment', CommentSchema);
