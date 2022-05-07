const test = require('tape');
// const index = require('./index');
const supertest = require('supertest')
// const app = require('./index');
// const app = require('./index');

// const express = require('express');
// // const index = require('./index');

const express = require('express');
const app = express();
const server = require('./src/backend/divisores.server');
// const port = process.env.PORT || 3006;
// const app = express();


const divisoresDe60 = [1, 2, 4, 3, 6, 12, 5, 10, 20, 15, 30, 60];

app.use('/', server);

test('GET Encontrar dividores de 60', (t) => {
    supertest(app)
      .get('/divisores/60')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) =>{
        t.error(err, 'Sem erros')
        t.assert(JSON.stringify(res.body.result) === JSON.stringify(divisoresDe60), "Divisores corretos")
        t.end()  
      })
})

// test('Retornar correto', (t) => {
//     t.assert(index.testX() === 25, "Deveria retornar 25")
//     t.end()  
// })

// test('Retornar errado', (t) => {
//     t.assert(index.testX() === 5, "Deveria retornar 5")
//     t.end()  
// })