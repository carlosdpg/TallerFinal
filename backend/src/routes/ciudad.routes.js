const { Router } = require('express')
const routerCiudad = Router()

const ciudadCtrl =require('../controllers/ciudad.controller.js')

routerCiudad.get('/',ciudadCtrl.getCiudades);
routerCiudad.post('/',ciudadCtrl.createCiudades);
routerCiudad.get('/:id',ciudadCtrl.getCiudad);
routerCiudad.put('/:id',ciudadCtrl.editCiudades);
routerCiudad.delete('/:id',ciudadCtrl.deleteCiudades);

module.exports = routerCiudad