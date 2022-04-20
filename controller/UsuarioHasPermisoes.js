const UsuariosHasPermisoesSchema = require('../model/UsuariosHasPermisoesSchema')

module.exports = {
    async index(req, res){
        let usuarioPermisoes = await UsuariosHasPermisoesSchema.find()
        return res.json(usuarioPermisoes)
    },
    async store(req, res){
        let {Medico, Clinica, Especilidade, criado_em, atualizado_em, status} = req.body;
        usuarioPermisoes= await UsuariosHasPermisoesSchema.create( {Medico, Clinica, Especilidade, criado_em, atualizado_em, status})
        return res.json(usuarioPermisoes)
    },  
    async update(req, res){
        let usuarioPermisoes = req.body
        usuarioPermisoes.atualizado_em = date.now()
        usuarioPermisoes = await UsuariosHasPermisoesSchema.updateOne({'_id': req.query.id}, UsuariosHasPermisoesSchema )
        return res.json(usuarioPermisoes)
    },
    async delete(req, res){
        let usuarioPermisoes = await UsuariosHasPermisoesSchema.findOne({'_id': req.query.id})
        usuarioPermisoes = await UsuariosHasPermisoesSchema.deleteOne({'_id': req.query.id}, UsuariosHasPermisoesSchema)
        return res.json(usuarioPermisoes)
    }

}