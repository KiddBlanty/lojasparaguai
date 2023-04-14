/* Importación del módulopromise-mysql. */
const MYSQL = require("promise-mysql")

/* La configuración de la base de datos. */
/* La configuración de la base de datos. */
const mysqlConfig = {
    host: "aws.connect.psdb.cloud",
    user: "qa12jrz6333s60cijgtz",
    password: "pscale_pw_MfpgUAffGlxpzl1GqyOVu7QSQHGrbr1fssJp4mGFQ4q",
    database: "lojasparaguai",
    ssl:{
        rejectUnauthorized: true
    }
}


class Conexion{
    /**
     * Devuelve una promesa que se resuelve en una conexión a la base de datos.
     * @returns Una promesa
     */
    static async getConexion(){
        return await MYSQL.createConnection(mysqlConfig)
    }
}

/* Exportando la clase Conexión para que pueda ser importada en otros archivos. */
module.exports = Conexion