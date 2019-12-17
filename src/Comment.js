const mongoose = require('mongoose');

const localdate = dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();

const CommentSchema = new mongoose.Schema({
    name:String,
    says:String,
    localdate:localdate,
    
});
module.exports = mongoose.model('Comment', CommentSchema);
