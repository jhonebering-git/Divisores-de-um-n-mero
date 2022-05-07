const express = require('express');

const server = require('./src/backend/divisores.server');
const port = process.env.PORT || 3006;
const app = express();

function testX() {
    return 25;
}

module.exports = {testX};

app.use('/', server);

app.get('*', (req, res) => {
    res.send('Route not found');
});

/* ROTEIRO DO ALGORITMO DO DESAFIO
1 - criar chamada que receba um número inteiro  OK
2 - criar um serviço que decompõem o os divisores primos desse número OK
3 - através dos números primos encontrados, encontrar os divisores OK
Exemplo: 
    45 | 3
    15 | 3
     5 | 5
     1 |
    Números primos: 1, 3 e 5
    Quantidade de divisores:
        3² . 5¹ = 9.5 = 45
      (2+1).(1+1) = 2.3.2 = 6 divisores no total
    Quem são os divisores: 
           | 1
    45 | 3 | 3
    15 | 3 | 9
     5 | 5 | 5, 15, 45
     1 |
         divisores encontrados: 1, 3, 9, 5, 15, 45 (total 6 divisores)
4 - Separar as contas em diferentes serviços
5 - criar testes unitários para verificar se o resultado corresponde.
*/


app.listen(port, () => {console.log('Servidor rodando')});