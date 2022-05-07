
const decomporNumero = require('./decomporNumero');

module.exports = function encontrarDivisores(num, divisoresPrimos) {

    const numDecomposto = decomporNumero(num, divisoresPrimos);
    let divisores = [1];

    numDecomposto.forEach(primo => {
        divisores.forEach(value => {
            const divisor = primo * value;
            if(!divisores.includes(divisor))
                divisores.push(divisor);
    
        });
    });

    return divisores;
}