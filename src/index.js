const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const User = require('./User')
const Produto = require('./Produto')
const Cidade = require('./Cidade')
const Carrinho = require('./Carrinho')
const Comment = require('./Comment')


const app = express();


mongoose.connect('mongodb+srv://migrate:migrate@cluster0-caszl.mongodb.net/testenew?retryWrites=true&w=majority',
    { useNewUrlParser: true });


app.use(express.json());// receber info do front
app.use(cors());// usa o cors para o front poder chamar o back



app.post('/comment', async (req, res) => { 
    //const dNow = new Date();
    //const localdate1 = dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();

    const comment = await Comment.create(req.body);
    console.log(" comments " + comment.name);
    return res.json(comment);
});
app.get('/comment', async (req, res) => {
    const comment = await Comment.find();
    return res.json(comment);
});
/////////////////////////////////////////////////////////
app.get('/users', async (req, res) => {
    const users = await User.find();
    return res.json(users);
});

app.get('/users/:id', async (req, res) => {
    const users = await User.findById(req.params.id);
    return res.json(users);
});

app.post('/users', async (req, res) => { // criar usuario
    const users = await User.create(req.body);
    console.log("criou o user " + users.name);
    return res.json(users);
});

app.put('/users/:id', async (req, res) => {
    const users = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(users);
});

app.delete('/users/:id', async (req, res) => {
    const users = await User.findByIdAndDelete(req.params.id);
    console.log("Deletou " + users.name);

    return res.json();

});
///////////////////////////////////////////////////////////////////////////
app.get('/produto', async (req, res) => {
    const produto = await Produto.find();
    return res.json(produto);
});

app.get('/produto/:id', async (req, res) => {
    const produto = await Produto.findById(req.params.id);
    return res.json(produto);
});

app.post('/produto', async (req, res) => {
    const produto = await Produto.create(req.body);
    console.log("produto  " + produto.name);
    return res.json(produto);
});

app.delete('/produto/:id', async (req, res) => {
    const produto = await Produto.findByIdAndDelete(req.params.id);
    console.log("Deletou " + produto.name);

    return res.json();

});
app.put('/produto/:id', async (req, res) => {
    const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(produto);
});

///////////////////////////////////////
app.get('/cidade', async (req, res) => {
    const cidade = await Cidade.find();
    return res.json(cidade);
});

app.get('/cidade/:id', async (req, res) => {
    const cidade = await Cidade.findById(req.params.id);
    return res.json(cidade);
});

app.post('/cidade', async (req, res) => { // criar usuario
    const cidade = await Cidade.create(req.body);
    console.log("criou a Cidade " + cidade.name);
    return res.json(cidade);
});

app.put('/cidade/:id', async (req, res) => {
    const cidade = await Cidade.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(cidade);
});

app.delete('/cidade/:id', async (req, res) => {
    const cidade = await Cidade.findByIdAndDelete(req.params.id);
    console.log("Deletou " + cidade.name);

    return res.json();

});
////////////////////////////////////////////
app.get('/carrinho', async (req, res) => {
    const carrinho = await Carrinho.find(req.params.id);
    return res.json(carrinho);
});
app.get('/carrinho/:id', async (req, res) => {
    const carrinho = await Carrinho.findById(req.params.id);
    return res.json(carrinho);
});

app.post('/carrinho', async (req, res) => { // criar usuario
    const carrinho = await Carrinho.create(req.body);
    console.log("criou " + carrinho.name + " no carrinho");
    return res.json(carrinho);



    /* const testeExisteProduto = await Carrinho.findOne(req.body.name);
    if (!testeExisteProduto) {
        const carrinho = await Carrinho.create(req.body);
        return res.json(carrinho);
    }else{
        console.log("já existe, só add 1 á quantidade"+req.body.quantidade);
        req.params.quantidade++;
        const car = await Carrinho.findByIdAndUpdate(req.body.name, req.params.quantidade, { new: true });
        return res.json(car);
    }

    */
});


app.delete('/carrinho/:name', async (req, res) => {
    //const carrinho = await Carrinho.findByIdAndDelete(req.params.id);
    const carrinho = await Carrinho.findOneAndDelete(req.params.name);
    console.log("Deletou " + carrinho.name);

    return res.json();
});

app.delete('/carrinho2', async (req, res) => { ///FUNCAO PARA DELETAR COLECTION
    Carrinho.remove().exec(function(error) {
        if(error) {
            console.log('Uh oh: ' + error);
        }
        else {
            console.log('CARRINHO DELETADO');
        }
     });
    return res.json();
});



app.listen(process.env.PORT || 3331);


