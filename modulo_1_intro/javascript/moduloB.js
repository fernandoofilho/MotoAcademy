
const {nome, idade} = require('./moduloA.js')

function message() {
    console.log(`Olá, ${nome}, de ${idade} anos`)
}
module.exports = {
    nome, idade,message
}
