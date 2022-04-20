const Permisoes = require('../model/Permisoes')

module.exports = {
    async index(req, res){
        let permisoes = await Permisoes.find()
        return res.json(Permisoes)
    },
    async store(req, res){
        let permisoes = req.body
        permisoes = await Permisoes.create(permisoes)
        return res.json(permisoes)
    },  
    async update(req, res){
        let permisoes = req.body
        permisoes.atualizado_em = Date.now()
        permisoes = await Permisoes.updateOne({'_id': req.query.id}, permisoes)
        return res.json(permisoes)
    },
    async delete(req, res){
        let permisoes = await Permisoes.findOne({'_id': req.query.id})
        permisoes = await Permisoes.deleteOne({'_id': req.query.id}, permisoes)
        return res.json(permisoes)
    }

}