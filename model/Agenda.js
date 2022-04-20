const mongoose = require('mongoose')
const AgendaSchema = new mongoose.Schema({
    date: String,
    criado_em: String,
    atualizado_em: String,
    status:true
})

module.exports =  mongoose.model('agenda',AgendaSchema);