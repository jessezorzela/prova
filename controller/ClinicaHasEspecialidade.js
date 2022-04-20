const ClinicaHasEspecialidade = require('../model/ClinicaHasEspecialidade')

module.exports = {
    async index(req, res){
        let medicoClinica = await ClinicaHasEspecialidade.find()
        return res.json(medicoClinica)
    },
    async store(req, res){
        let {Medico, Clinica, Especilidade, criado_em, atualizado_em, status} = req.body;
        medicoClinica= await ClinicaHasEspecialidade.create( {Medico, Clinica, Especilidade, criado_em, atualizado_em, status})
        return res.json(medicoClinica)
    },  
    async update(req, res){
        let medicoClinica = req.body
        medicoClinica.atualizado_em = date.now()
        medicoClinica = await ClinicaHasEspecialidade.updateOne({'_id': req.query.id}, ClinicaHasEspecialidade )
        return res.json(medicoClinica)
    },
    async delete(req, res){
        let medicoClinica = await ClinicaHasEspecialidade.findOne({'_id': req.query.id})
        medicoClinica = await ClinicaHasEspecialidade.deleteOne({'_id': req.query.id}, ClinicaHasEspecialidade)
        return res.json(medicoClinica)
    }

}