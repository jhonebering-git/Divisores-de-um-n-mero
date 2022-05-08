module.exports = function decomporNumero(num, divisoresPrimos){

    const decomposto = new Array()
    let _num = num
    cont = 0

    while(_num >= 1 && divisoresPrimos[cont] !== undefined) {
        if(_num % divisoresPrimos[cont] !== 0){
            cont++
            continue
        }
        _num = _num / divisoresPrimos[cont]
        decomposto.push(divisoresPrimos[cont])
    }

    return decomposto
}