const Persona = require("../models/persona");

const personaCtrl = {}

personaCtrl.getPersonas = async (req,res) => {
    const personas = await Persona.find();
    res.json(personas);
}
personaCtrl.createPersonas = async (req,res) => {
    try{
        const persona = new Persona({
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            idtipodocumento: req.body.idtipodocumento,
            documento: req.body.documento,
            lugarresidencia: req.body.lugarresidencia,
            fechanacimiento: req.body.fechanacimiento,
            email: req.body.email,
            telefono: req.body.telefono,
            usuario: req.body.usuario,
            password: req.body.password
        });
        await persona.save();
        res.json({ status: "Persona creada" });
    } catch(err){
        
    }
}
personaCtrl.getPersona = async (req,res) => {
    const { id } = req.params;
    const persona = await Persona.findById(id);
    res.json(persona);
}
personaCtrl.editPersonas = async (req,res) => {
    const { id } = req.params;
    await Persona.findByIdAndUpdate(id, {$set: req.body}, {new: true});
    res.json({ status: "Persona actualizada" });
}
personaCtrl.deletePersonas = async (req,res) => {
    await Persona.findByIdAndRemove(req.params.id);
    res.json({ status: "Persona borrada" });
}

module.exports = personaCtrl;