const mongoose = require('mongoose');

const dNow = new Date();
const localdate1 = dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();

const CommentSchema = new mongoose.Schema({
    name:String,
    says:String,
    localdate1:String,
    
});
module.exports = mongoose.model('Comment', CommentSchema);
