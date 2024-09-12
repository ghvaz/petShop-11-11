const model = require("../models/pet.js")

module.exports = {
    store : async function(req, res) {
    try {
        console.log(req.body);
        let novoPet = new model(req.body)
        await novoPet.save()
        res.status(201).json(`${novoPet.nome} foi adicionado com sucesso!`)
    } catch (error) {
        res.status(400).json(error)
    }
    },

    showAll: async function(req, res) {
        try {
            let pets = await model.find()
            res.status(200).json(pets)
        } catch (error) {
            res.status(418).json("Requisição mal sucedida. "+error)
        }
    },

    show: async function(req, res) {
        try {
            let pet = await model.find({nome: req.params.nome})
            res.status(200).json(pet)
        } catch (error) {
            res.status(418).json(req.params.nome+" não encontrada. ERRO: "+error)
        }
    },

    destroy: async function(req, res) {
        try {
            await model.findOneAndDelete({nome: req.params.nome})
            res.status(200).json(req.params.nome+" foi removido com sucesso!")
        } catch (error) {
            res.status(418).json("Requisição mal sucedida. "+error)
        }
    },

    update: async function(req, res) {
        try {
            await model.findOneAndUpdate({nome: req.params.nome}, req.body)
            res.status(200).json(req.params.nome+" foi atualizado com sucesso!")
        } catch (error) {
            res.status(400).json("Requisição mal sucedida. "+error)
        }
    }

}