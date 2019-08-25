const mongoose = require('mongoose');

const CarrinhoSchema = new mongoose.Schema({
    name:String,
    description:String,
    value:Number,
    quantidade:Number
});


module.exports = mongoose.model('Carrinho', CarrinhoSchema);