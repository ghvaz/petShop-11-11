const mongoose = require("mongoose")

const esquemaCliente = new mongoose.Schema({
    nome: {
        type: String, 
        required: [true, "Tem nome não?"]
    },
    endereco:{
        type: Object, 
        required: [true, "Morador de rua?"]
    },
    numero_casa: {type: Number, 
        required: [true, "Morador de rua 2?"]
    },
    telefone: {type: Number, 
        required: [true, "Tem telefone?"]
    }
})

const cliente = mongoose.model("cliente", esquemaCliente)
module.exports = cliente 