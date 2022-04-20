const mongoose = require('mongoose')
const MedicoSchema = new mongoose.Schema({
    "name": String,
    "cep": String,
    "state": String,
    "city": String,
    "neighborhood": String,
    "Street": String,
    "telefone": String,  
    criado_em: String,
    atualizado_em: String,
    status:true 
})

module.exports = mongoose.model('Medico', MedicoSchema);