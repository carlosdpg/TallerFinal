const { Router } = require('express')
const routerTipoDocumento = Router()

const tipodocumentoCtrl =require('../controllers/tipodocumento.controller.js')

routerTipoDocumento.get('/',tipodocumentoCtrl.getTipoDocumentos);
routerTipoDocumento.post('/',tipodocumentoCtrl.createTipoDocumentos);
routerTipoDocumento.get('/:id',tipodocumentoCtrl.getTipoDocumento);
routerTipoDocumento.put('/:id',tipodocumentoCtrl.editTipoDocumentos);
routerTipoDocumento.delete('/:id',tipodocumentoCtrl.deleteTipoDocumentos);

module.exports = routerTipoDocumento