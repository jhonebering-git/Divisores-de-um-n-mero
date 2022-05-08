module.exports = function response(res, code, resultado = false){

    let msg = 'Not found'

    switch (code){
        case 200:
            msg = resultado 
            break
        case 400: 
            msg = 'Valor informado não é válido'
            break
        case 403:
            msg = 'Retorno vazio'
            break
        case 404:
            msg = 'Serviço não encontrado'
            break
        default:
            break
    }

    res.status(code).json({status: code, result: msg})
}
