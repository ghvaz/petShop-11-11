const mongoose = require("mongoose")

const esquemaPET = new mongoose.Schema({
    nome: {type: String, required: [true, "Teu pet não tem nome?"]},
    raca:{type: String,default: "Vira-lata"}
})

const Pet = mongoose.model("Pet", esquemaPET)
module.exports = Pet 