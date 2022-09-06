const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
const port = process.env.PORT || 3000

// Mis Importaciones
const CategoriaModel = require("./model/CategoriaModel.class")
const TiendaModel = require("./model/TiendaModel.class")
const { response } = require("express")
// -----------------

app.use(cors({origin: "*"}))
app.use(express.json())
app.use("/", express.static(path.join(__dirname, "public")))

app.get("/", (request, response)=>{
    response.sendFile("index.html")
})

app.get("/ubicateya/api/categoria", async (request, response)=>{
    const data = await CategoriaModel.getCategoria()

    if (!data) return response.json({error: "Ocurrio un error"})

    response.json(data)
})

app.get("/ubicateya/api/tiendas", async (request, response)=> {
    const data = await TiendaModel.getTiendas()

    if (!data) return response.json({error: "Ocurrio un error"})

    response.json(data)
})

app.get("/ubicateya/api/tiendas/:id_categoria", async (request, response)=> {
    const {id_categoria} = request.params
    
    const data = await TiendaModel.getTiendasCategoria(id_categoria)

    if (!data) return response.json({error: "Ocurrio un error"})

    response.json(data)
})

app.listen(port, ()=>{
    console.log("Servidor arrancado en el puerto: " + port)
})