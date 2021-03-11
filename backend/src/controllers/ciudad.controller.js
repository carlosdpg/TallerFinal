const Ciudad = require("../models/ciudad");

const ciudadCtrl = {}

ciudadCtrl.getCiudades = async (req,res) => {
    const ciudades = await Ciudad.find();
    res.json(ciudades);
}
ciudadCtrl.createCiudades = async (req,res) => {
    try{
    const ciudad = new Ciudad({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    });
    await ciudad.save();
    res.json({ status: "Ciudad creada" });
    }catch(err){
        
    }
}
ciudadCtrl.getCiudad = async (req,res) => {
    const { id } = req.params;
    const ciudad = await Ciudad.findById(id);
    res.json(ciudad);
}
ciudadCtrl.editCiudades = async (req,res) => {
    const { id } = req.params;
    await Ciudad.findByIdAndUpdate(id, {$set: req.body}, {new: true});
    res.json({ status: "Ciudad actualizada" });
}
ciudadCtrl.deleteCiudades = async (req,res) => {
    await Ciudad.findByIdAndRemove(req.params.id);
    res.json({ status: "Ciudad borrada" });
}

module.exports = ciudadCtrl;