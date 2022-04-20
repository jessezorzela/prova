const mongoose = require('mongoose')
const EspecialidadeSchema = new mongoose.Schema({
    "name": String,
    criado_em: String,
    atualizado_em: String,
    status:true
})

module.exports = mongoose.model('especilidade', EspecialidadeSchema);