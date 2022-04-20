const routes = require('express').Router();

const UserController = require('../controller/User')
routes.post('/user',UserController.store)
routes.get('/user',UserController.index)
routes.put('/user',UserController.update)
routes.delete('/user',UserController.delete)

const ClinicaController = require('../controller/Clinica');
routes.post('/clinica',ClinicaController.store)
routes.get('/clinica',ClinicaController.index)
routes.put('/clinica',ClinicaController.update)
routes.delete('/clinica',ClinicaController.delete)

const BuscaCepController = require('../controller/BuscaCep');
routes.get('/busca-cep',BuscaCepController.index)

const EnderecoController = require('../controller/Endereco');
routes.post('/endereco',EnderecoController.store)
routes.get('/endereco',EnderecoController.index)
routes.put('/endereco',EnderecoController.update)
routes.delete('/endereco',EnderecoController.delete)

const EspecialidadeController = require('../controller/Especilidade');
routes.post('/especialidades',EspecialidadeController.store)
routes.get('/especialidades',EspecialidadeController.index)
routes.put('/especialidades',EspecialidadeController.update)
routes.delete('/especialidades',EspecialidadeController.delete)

const MedicoController = require('../controller/Medico');
routes.post('/medico',MedicoController.store)
routes.get('/medico',MedicoController.index)
routes.put('/medico',MedicoController.update)
routes.delete('/medico',MedicoController.delete)

const AgendaController = require('../controller/Agenda');
routes.post('/agenda',AgendaController.store)
routes.get('/agenda',AgendaController.index)
routes.put('/agenda',AgendaController.update)
routes.delete('/agenda',AgendaController.delete)

const PermisoesController = require('../controller/Permisoes');
routes.post('/permisoes',PermisoesController.store)
routes.get('/permisoes',PermisoesController.index)
routes.put('/permisoes',PermisoesController.update)
routes.delete('/permisoes',PermisoesController.delete)

module.exports = routes
