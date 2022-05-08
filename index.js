const encontraDivisoresPrimos = require('./src/backend/api/encontraDivisoresPrimos')
const encontraDivisores = require('./src/backend/api/encontraDivisores')

var readline = require('readline')
var resp = ""

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question("Informe um número: ", function(num) {

    const divisoresPrimos = encontraDivisoresPrimos(num)
    const divisores = encontraDivisores(num, divisoresPrimos)
    divisoresPrimos.push(1)

    console.log("\nDivisores Primos: " + divisoresPrimos.sort((a,b) => a - b))
    console.log("\nDivisores: " + divisores.sort((a,b) => a - b))
    leitor.close()
})

