const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
const port = process.env.PORT || 3000

// Mis Importaciones
const CategoriaModel = require("./model/CategoriaModel.class")
const TiendaModel = require("./model/TiendaModel.class")
const { response } = require("express")
const UsuarioModel = require("./model/UsuarioModel.class")
// -----------------

app.use(cors({origin: "*"}))
app.use(express.json())
app.use("/", express.static(path.join(__dirname, "public")))

app.get("/", (request, response)=>{
    response.sendFile("index.html")
})

app.get("/api/categoria", async (request, response)=>{
    const data = await CategoriaModel.getCategoria()

    if (!data) return response.json({error: "Ocurrio un error"})

    response.json(data)
})

app.get("/api/tiendas", async (request, response)=> {
    const data = await TiendaModel.getTiendas()

    if (!data) return response.json({error: "Ocurrio un error"})

    response.json(data)
})

app.get("/api/tiendas/:id_categoria", async (request, response)=> {
    const {id_categoria} = request.params
    
    const data = await TiendaModel.getTiendasCategoria(id_categoria)

    if (!data) return response.json({error: "Ocurrio un error"})

    response.json(data)
})
app.post("/api/usuario/login", async (request, response)=> {
    const usuario = request.body
    
    
    const data = await UsuarioModel.getUsuario(usuario)

    if (!data) return response.json({error: "Ocurrio un error"})

    response.json(data)
})

app.post("/api/usuario/registro", async (request, response)=> {
    const usuario = request.body

    const verificarUsuario= await UsuarioModel.getUsuario(usuario)

    if(!verificarUsuario) return response.status(500).json({error: "Ocurrio un error"})
    if(verificarUsuario.length > 0) return response.status(202).json({error: "El mail ya Existe"})
    
    
    const data = await UsuarioModel.setUsuario(usuario)

    if (!data) return response.status(500).json({error: "Ocurrio un error"})

    response.status(201).json(data)
})



app.listen(port, ()=>{
    console.log("Servidor arrancado en el puerto: " + port)
})