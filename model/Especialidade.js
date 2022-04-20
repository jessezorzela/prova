const mongoose = require('mongoose')

const EspecialidadeSchema = new mongoose.Schema({
    "name": String,
})

module.exports = mongoose.model('especilidade', EspecialidadeSchema);