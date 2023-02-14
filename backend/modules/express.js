const express = require("express")
const cors = require("cors")
const JogadorModel = require("../models/jogador.model")
const app = express();

app.use(cors());

app.use(express.json()); 
const port = 8080;

app.get('/jogadores', async (req, res) => {
    try{
        const jogadores = await JogadorModel.find({});
        res.status(200).json(jogadores);

    } catch(err){
        if(err){
            return res.status(500).send(err.message)
        }
    }
});

app.post('/jogadores', async (req, res) => {
    try{
        const jogador = await JogadorModel.create(req.body);
        res.status(201).json(jogador);

    } catch(err){
        if(err){
            res.status(500).send(err.message);
        }
    }
});

app.get('/jogadores/:id', async (req, res) => {
    try{
        const id = req.params.id;

        const jogador = await JogadorModel.findById(id);

        return res.status(200).json(jogador);

    } catch(err){
        res.status(500).send(err.message);
    }
})

app.delete('/jogadores/:id', async (req, res) => {
    try{
        const id = req.params.id;

        const jogador = await JogadorModel.findByIdAndRemove(id);

        return res.status(200).json(jogador);
    } catch(err){
        res.status(500).send(err.message);
    }
})

app.patch('/jogadores/:id', async (req, res) => {
    try{
        const id = req.params.id;

        const jogador = await JogadorModel.findByIdAndUpdate(id, req.body, {new: true});

        return res.status(200).json(jogador);
    } catch(err){
        res.status(500).send(err.message);
    }
})

app.listen(port, (err) => {
    if(err){
        return console.log(err.message);
    }
    console.log("Escutando a porta " + port);
    
})