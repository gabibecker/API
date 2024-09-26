"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

//importando a rota inicial
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");

app.use(bodyParser.json()); //conteudo convertido para json
app.use(bodyParser.urlencoded({ extended: false })); //codificar as urls

app.use("/", indexRoute);
app.use("/products", productRoute);
module.exports = app; //referenciando o arquivo separado/exporta
