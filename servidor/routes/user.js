//RUTAS PARA LOS USUARIOS
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//API/USERS
router.post('/', userController.crearUsuario);  //CREAR UN NUEVO USUARIO
router.get('/', userController.obtenerUsuarios);  //OBTENER LOS DATOS DE TODOS LOS USUARIOS REGISTRADOS
router.put('/:id', userController.actualizarUsuario);  //ACTUALIZAR DATOS DE UN USUARIO
router.get('/:id', userController.obtenerUsuario);  //OBTENER LOS DATOS DE UN USUARIO YA REGISTRADO
router.delete('/:id', userController.eliminarUsuario);  //ELIMINAR USUARIO

module.exports = router;