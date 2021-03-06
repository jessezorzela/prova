const Especialidade = require('../model/Especialidade')

module.exports = {
    async index(req, res){
        let especialidade = await Especialidade.find()
        return res.json(especialidade)
    },
    async store(req, res){
        let especialidade = req.body
        especialidade = await Especialidade.create(especialidade)
        return res.json(especialidade)
    },  
    async update(req, res){
        let especialidade = req.body
        especialidade.atualizado_em = Date.now()
        especialidade = await Especialidade.updateOne({'_id': req.query.id}, especialidade)
        return res.json(especialidade)
    },
    async delete(req, res){
        let especialidade = await Especialidade.findOne({'_id': req.query.id})
        especialidade = await Especialidade.deleteOne({'_id': req.query.id}, especialidade)
        return res.json(especialidade)
    }
    
}