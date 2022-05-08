
function verificaSePrimo(num){
    for(let i = 2; i <num; i++){
        if(num % i === 0) {
            return false
        }
    }
  
    return num > 1
}

module.exports = function encontraDivisoresPrimos(num){

    let numbers = new Array()

    for (var i = 0; i <= num; i++) {
        if (verificaSePrimo(i) && (num % i === 0)){
            numbers.push(i)
            if((i > 2) && (i % 2 === 0)){
                break
            }
        }
    }

    return numbers
}