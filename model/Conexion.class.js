const MYSQL = require("promise-mysql")

const mysqlConfig = {
    host: "us-east.connect.psdb.cloud",
    user: "7wkg929fm9hs4m1f2ta5",
    password: "pscale_pw_vggQZ5aHohgIbz8nvKX5Oxjx9OUMrr7r4Feg2qC24UG",
    database: "lojasparaguai",
    ssl:{
        rejectUnauthorized: true
    }
}

class Conexion{
    static async getConexion(){
        return await MYSQL.createConnection(mysqlConfig)
    }
}

module.exports = Conexion