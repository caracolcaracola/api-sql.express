const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConexion = require("./conn");

const  inventario = require("./routes/inventario");

var app = express();
app.use(bodyParser.json());
app.use("/inventario", inventario);

app.listen(3000);