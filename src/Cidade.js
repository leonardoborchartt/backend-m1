const mongoose = require('mongoose');

const CidadeSchema = new mongoose.Schema({
    name:String,
});

module.exports = mongoose.model('Cidade', CidadeSchema);
