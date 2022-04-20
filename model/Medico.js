const mongoose = require('mongoose')
const medicoSchema = new mongoose.Schema({
    name: String,
    cep: String,
    state: String,
    city: String,
    neighborhood: String,
    Street: String,
    telefone: String,  
    criado_em: String,
    atualizado_em: String,
    status:Boolean
})

module.exports = mongoose.model('Medico', medicoSchema);