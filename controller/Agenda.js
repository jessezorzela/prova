const Agenda = require('../model/Agenda')

module.exports = {
    async index(req, res){
        let Agenda = await Agenda.find()
        return res.json(agenda)
    },
    async store(req, res){
        let Agenda = req.body
        Agenda = await Agenda.create(agenda)
        return res.json(agenda)
    },  
    async update(req, res){
        let Agenda = req.body
        Agenda.atualizado_em = Date.now()
        Agenda = await Agenda.updateOne({'_id': req.query.id}, agenda)
        return res.json(agenda)
    },
    async delete(req, res){
        let Agenda = await Agenda.findOne({'_id': req.query.id})
        Agenda = await Agenda.deleteOne({'_id': req.query.id}, agenda)
        return res.json(agenda)
    }

}