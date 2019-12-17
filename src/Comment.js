const mongoose = require('mongoose');


const CommentSchema = new mongoose.Schema({
    name:String,
    says:String,
    localdate1:String,
    
});
module.exports = mongoose.model('Comment', CommentSchema);
