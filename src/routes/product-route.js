'use strict';

const express = require('express');
const router = express.Router();

router.post("/", (req, res, next) => {
    //request, response, next
    res.status(201).send(req.body); //enviando uma resposta
  });  
  
router.put("/:id", (req, res, next) => {
    //request, response, next
    const id = req.params.id;
    res.status(200).send({
      id: id,
      item: req.body,
    }); //enviando uma resposta
  });
  
router.delete("/", (req, res, next) => {
      //request, response, next
      res.status(200).send(req.body); //enviando uma resposta
    });

module.exports = router;