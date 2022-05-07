const encontraDivisoresPrimos = require('./api/encontraDivisoresPrimos');
const encontraDivisores = require('./api/encontraDivisores');

const express = require('express');
const api = express.Router();

api.get('/', (req, res) => {
    res.json({'Ola': 'Seja bem vindo'});
});

/**Pendencia, transformar esse arquivo de rotas em arquivo de chamada de api, api.get */
api.get('/divisores/:num', (req, res) => {
    const num = parseInt(req.params.num);

    const divisoresPrimos = encontraDivisoresPrimos(num);
    const divisores = encontraDivisores(num, divisoresPrimos);


    res.status(200).json({status: 200, result: divisores});
});

api.get('/primos/:num', (req, res) => {
    const num = parseInt(req.params.num);
    const result = encontraDivisoresPrimos(num);
    res.status(200).json({status: 200, result: result});
});

module.exports = api;