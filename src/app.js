"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

//importando a rota inicial
const indexRoute = require("./routes/index-route");
const userRoute = require("./routes/user-route") //IMPORTANDO A ROTA USER

app.use(bodyParser.json()); //conteudo convertido para json
app.use(bodyParser.urlencoded({ extended: false })); //codificar as urls

app.use("/", indexRoute);
app.use("/user", userRoute); //DEFININDO A ROTA PARA USER

module.exports = app; //referenciando o arquivo separado/exporta

app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
