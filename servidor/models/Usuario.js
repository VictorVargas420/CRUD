const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    apellidoP: {
        type: String,
        required: true
    },
    apellidoM: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    matricula: {
        type: String,
        required: true
    },
    equipo: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);