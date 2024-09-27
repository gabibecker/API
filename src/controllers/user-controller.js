const User = require('../model/User.js');
const express = require('express');
const router = express.Router();

exports.post = (req, res, next) => {
        const { nome, cpf, email, senha} = req.body();
        const user = new User( nome, cpf, email, senha)
        res.status(201).json(user.toJSON());
};
