const { Schema, model} = require('mongoose')

const personaSchema = new Schema({
    nombres: {type: String, required: true},
    apellidos: {type: String, required: true},
    idtipodocumento: {type: Schema.Types.ObjectId, ref: "Tipodocumento"},
    documento: {type: Number, required: true},
    lugarresidencia: {type: Schema.Types.ObjectId, red: "Ciudad"},
    fechanacimiento: {type: String, required: true},
    email: {type: String, required: true},
    telefono: {type: Number, required: true},
    usuario: {type: String, required: true},
    password: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model("Persona", personaSchema);