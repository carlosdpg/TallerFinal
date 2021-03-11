const { Router } = require('express')
const routerPersona = Router()

const personaCtrl =require('../controllers/persona.controller.js')

routerPersona.get('/', personaCtrl.getPersonas);
routerPersona.post('/', personaCtrl.createPersonas);
routerPersona.get('/:id',personaCtrl.getPersona);
routerPersona.put('/:id',personaCtrl.editPersonas);
routerPersona.delete('/:id',personaCtrl.deletePersonas);



module.exports = routerPersona