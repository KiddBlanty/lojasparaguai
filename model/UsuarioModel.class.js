const Conexion = require("./Conexion.class");

class UsuarioModel {
    static async getUsuario({email,clave}) {
        try {
            const sql = "select * from usuario where email=? and clave=?";
            const conexion = await Conexion.getConexion();
            const data = await conexion.query(sql, [email,clave]);
            return data;
        } catch (error) {
            console.log(error)
            return null
        }
    }
    static async setUsuario(nombre,email,clave){
            try {
                const sql = "insert into usuario (nombre, email,clave)values(?,?,?)"
                const conexion = await Conexion.getConexion();
                const data = await conexion.query(sql, [nombre,email.clave]);
                return data;
            } catch (error) {
                console.log(error)
                return null
            }
        }
        static async getUsuarioEmail(email){
            try {
                const sql = "select * from usuario where email=?"
                const conexion = await Conexion.getConexion();
                const data = await conexion.query(sql, [email]);
                return data;
            } catch (error) {
                console.log(error)
                return null
            }
        }
    }

module.exports = UsuarioModel;
