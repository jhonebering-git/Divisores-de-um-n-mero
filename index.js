const express = require('express');

const routes = require('./routes/routes');
const port = process.env.PORT || 3006;
// const host = '127.0.0.1';
const app = express();

app.use('/', routes);
// app.use('/divisores/:num', routes);

app.get('*', (req, res) => {
    res.send('Route not found');
});

/* ROTEIRO DO ALGORITMO DO DESAFIO
1 - criar chamada que receba um número inteiro
2 - criar um serviço que decompõem o os divisores primos desse número
3 - através dos números primos encontrados, encontrar os divisores
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
// app.get('/', (req, res) => {
//     res.send('Main');
// });
// app.get('/a1', (req, res) => {
//     res.json({valor: 'Valor'});
// });

app.listen(port, () => {console.log('Servidor rodando')});