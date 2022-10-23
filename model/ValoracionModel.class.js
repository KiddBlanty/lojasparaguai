const Conexion= require("./Conexion.class")

class ValoracionModel{
    static async getValoracion(id){
        try {
            const conexion=await Conexion.getConexion()
            const query= "select sum(valoracion)/count(valoracion) as calificacion from calificacion where id_tienda=?"
            const data= await conexion.query(query,[id])
            return data
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

module.exports=ValoracionModel