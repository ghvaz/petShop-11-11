const express = require("express")
const rotas = express.Router()

const ctrl = require("../controllers/pet.js")

rotas.post("/", ctrl.store)
rotas.get("/", ctrl.showAll)
rotas.get("/:nome", ctrl.show)
rotas.delete("/:nome", ctrl.destroy)
rotas.put("/:nome", ctrl.update)

module.exports = rotas