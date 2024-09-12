const express = require("express")
const rotas = express.Router()
const end = require("../middleware/cepEND.js")
const ctrl = require("../controllers/clientes.js")

rotas.post("/",end, ctrl.store)
rotas.get("/", ctrl.showAll)
rotas.get("/:nome", ctrl.show)
rotas.delete("/:nome", ctrl.destroy)
rotas.put("/:nome",end, ctrl.update)

module.exports = rotas