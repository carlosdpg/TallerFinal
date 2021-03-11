const TipoDocumento = require("../models/tipodocumento");

const tipodocumentoCtrl = {}

tipodocumentoCtrl.getTipoDocumentos = async (req,res) => {
    const tipodocumentos = await TipoDocumento.find();
    res.json(tipodocumentos);
}
tipodocumentoCtrl.createTipoDocumentos = async (req,res) => {
    try{
        const tipodocumento = new TipoDocumento({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
        });
        await tipodocumento.save();
        res.json({ status: "Tipo de documento creado" });
    } catch(err){
            
    }
}
tipodocumentoCtrl.getTipoDocumento = async (req,res) => {
    const { id } = req.params;
    const tipodocumento = await TipoDocumento.findById(id);
    res.json(tipodocumento);
}
tipodocumentoCtrl.editTipoDocumentos = async (req,res) => {
    const { id } = req.params;
    await TipoDocumento.findByIdAndUpdate(id, {$set: req.body}, {new: true});
    res.json({ status: "Tipo de documento actualizado" });
}
tipodocumentoCtrl.deleteTipoDocumentos = async (req,res) => {
    await TipoDocumento.findByIdAndRemove(req.params.id);
    res.json({ status: "Tipo de documento borrado" });
}

module.exports = tipodocumentoCtrl;