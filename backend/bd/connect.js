const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect(
        'mongodb+srv://admin:admin123@reactnode.plac4dj.mongodb.net/?retryWrites=true&w=majority',
        (error) => {
            if(error){
                return console.log(`Ocorreu um erro ao se conectar com o banco de dados: ${error}`)
            }

            return console.log('Conexão ao banco de dados realizada com sucesso!');
        }
    )
}

module.exports = connectDB;