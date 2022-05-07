const test = require('tape');
const supertest = require('supertest')

const express = require('express');
const app = express();
const server = require('./src/backend/divisores.server');

const divisoresDe60 = [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60];
const divisoresPrimosDe60 = [2, 3, 5];
const divisoresDe45 = [1, 3, 5, 9, 15, 45];
const divisoresPrimosDe45 = [3, 5];


app.use('/', server);

test('GET Encontrar dividores de 60', (t) => {
    supertest(app)
      .get('/divisores/60')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) =>{
        t.error(err, 'Sem erros')
        t.assert(JSON.stringify(res.body.result) === JSON.stringify(divisoresDe60), "Divisores 60: " + res.body.result)
        t.assert(res.body.result[1] === 2 , "Segundo divisor de 60 deve ser o 2")
        t.assert(res.body.result[8] === 15 , "Nono divisor de 60 deve ser o 15")
        t.assert(typeof(res.body.result) === 'object' , "O retorno deve ser do tipo object")
        t.end()  
      })
})

test('GET Encontrar dividores primos de 60', (t) => {
    supertest(app)
      .get('/primos/60')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) =>{
        t.error(err, 'Sem erros')
        t.assert(JSON.stringify(res.body.result) === JSON.stringify(divisoresPrimosDe60), "Divisores primos de 60: " + res.body.result)
        t.assert(res.body.result[0] === 2 , "Primeiro divisor primo de 60 deve ser o 2")
        t.assert(res.body.result[2] === 5 , "terceiro divisor primo de 60 deve ser o 5")
        t.assert(typeof(res.body.result) === 'object' , "O retorno deve ser do tipo object")
        t.end()  
      })
})

test('GET Encontrar dividores de 45', (t) => {
    supertest(app)
      .get('/divisores/45')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) =>{
        t.error(err, 'Sem erros')
        t.assert(JSON.stringify(res.body.result) === JSON.stringify(divisoresDe45), "Divisores 45: " + res.body.result)
        t.assert(res.body.result[1] === 3 , "Segundo divisor de 45 deve ser o 3")
        t.assert(res.body.result[5] === 45 , "Quinto divisor de 45 deve ser o 45")
        t.assert(typeof(res.body.result) === 'object' , "O retorno deve ser do tipo object")
        t.end()  
      })
})


test('GET Encontrar dividores primos de 45', (t) => {
    supertest(app)
      .get('/primos/45')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) =>{
        t.error(err, 'Sem erros')
        t.assert(JSON.stringify(res.body.result) === JSON.stringify(divisoresPrimosDe45), "Divisores primos de 45: " + res.body.result)
        t.assert(res.body.result[0] === 3 , "Primeiro divisor primo de 45 deve ser o 3")
        t.assert(res.body.result[1] === 5 , "Segundo divisor primo de 45 deve ser o 5")
        t.assert(typeof(res.body.result) === 'object' , "O retorno deve ser do tipo object")
        t.end()  
      })
})
