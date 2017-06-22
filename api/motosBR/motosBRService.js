const MotosBR = require('./motosBR')

//Cria API REST baseada no padrão
MotosBR.methods(['get', 'post', 'put', 'delete'])

module.exports = MotosBR
