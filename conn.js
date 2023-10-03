const mysql = require("mysql");

var mysqlConexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tec1",
    multipleStatements: true,

});

mysqlConexion.connect(
    (err) =>{
        if(!err){
            console.log("conectado ");
        }
        else{
            console.log("error");
        }
    }
)

module.exports = mysqlConexion;