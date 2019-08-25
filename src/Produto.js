const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    name:String,
    description:String,
    value:Number
});


module.exports = mongoose.model('Produto', ProdutoSchema);