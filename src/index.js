const express = require("express")
const app = express()
app.use(express.json())
const port = 8000

const bd = require("./confg/BD.js")


const rotas_pet = require("./routes/pet.js")
app.use("/pet", rotas_pet)


const rotas_clientes = require("./routes/clientes.js")
app.use("/clientes", rotas_clientes)

app.listen(port, () => {
    console.log("Servidor rodando. Porta: " + port)
})