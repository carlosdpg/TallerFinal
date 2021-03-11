const { Schema, model} = require('mongoose')

const ciudadSchema = (
    "Ciudad",
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

module.exports = model("Ciudad", ciudadSchema);