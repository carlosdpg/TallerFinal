const { Schema, model} = require('mongoose')

const tipodocumentoSchema = (
    "TipoDocumento",
    new Schema(
    {
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
));

module.exports = model("TipoDocumento", tipodocumentoSchema);