const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

//CREANDO SERVIDOR
const app = express();

//CONECCION CON LA BD
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/users', require('./routes/user'));

app.listen(4000, () => {
    console.log('El servidor se esta ejecutando correctamente.')
})