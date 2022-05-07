const test = require('tape');
const index = require('./index');

test('Retornar correto', (t) => {
    t.assert(index.testX() === 25, "Deveria retornar 25")
    t.end()  
})

test('Retornar errado', (t) => {
    t.assert(index.testX() === 5, "Deveria retornar 5")
    t.end()  
})