const MotosBR = require('./motosBR')

//Cria API REST baseada no padrão
MotosBR.methods(['get', 'post', 'put', 'delete'])
//Retorna objeto novo em PUT/POST
MotosBR.updateOptions({new: true, runValidators: true})

module.exports = MotosBR
