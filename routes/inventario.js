const express = require("express");
const Router = express.Router();
const mysqlConexion = require("../conn");
const req = require("express/lib/request");

Router.get("/",(req, res) => {
    mysqlConexion.query("SELECT * from inventario", (err, rows, fields) =>
        {
            if(!err){
                res.send(rows);
            }
            else{
                console.log(err);
            }
        })
    }
)



module.exports = Router;