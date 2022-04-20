const medico = require('../model/Medico')

module.exports = {
    async index(req, res){
        let medico = await medico.find()
        return res.json(medico)
    },
    async store(req, res){
        let medico = req.body
        medico = await medico.create(medico)
        return res.json(medico)
    },  
    async update(req, res){
        let medico = req.body
        medico.atualizado_em = Date.now()
        medico = await medico.updateOne({'_id': req.query.id}, medico)
        return res.json(medico)
    },
    async delete(req, res){
        let medico = await medico.findOne({'_id': req.query.id})
        medico = await medico.deleteOne({'_id': req.query.id}, medico)
        return res.json(medico)
    }

}