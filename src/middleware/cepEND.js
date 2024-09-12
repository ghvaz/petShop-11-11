const axios = require("axios")
const e = require("express")

module.exports = async function(req, res, next) {
    let cep = req.body.cep
    let url = `https://viacep.com.br/ws/${cep}/json/`
    let resultado = await axios
    .get(url)
    .then((resposta) => {
            req.body.endereco = resposta.data
            const {logradouro, bairro, localidade, uf} = resposta.data
            req.body.endereco = {logradouro, bairro, localidade, uf}
            delete req.body.cep
            next()
        })
}
