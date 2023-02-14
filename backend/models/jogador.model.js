const mongoose = require("mongoose");

const jogadorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  posicao: {
    type: String,
    required: true,
  },
  
});

const JogadorModel = mongoose.model("Jogador", jogadorSchema);

module.exports = JogadorModel;