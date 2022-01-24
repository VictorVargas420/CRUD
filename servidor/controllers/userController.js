const Usuario = require("../models/Usuario");

exports.crearUsuario = async (req, res) => {
  try {
    let usuario;

    //CREACIÓN DE USUARIO(S)
    usuario = new Usuario(req.body);

    await usuario.save();
    res.send(usuario);

  } catch (error) {
    console.log(error);
    res.status(500).send("Se ha presentado un error inesperado.");
  }
}

exports.obtenerUsuarios = async (req, res) => {
  try {

    const usuarios = await Usuario.find();
    res.json(usuarios); //DEVOLVIENDO JSON HACIA EL CLIENTE

  } catch (error) {
    console.log(error);
    res.status(500).send("Se ha presentado un error inesperado.");
  }
}

exports.actualizarUsuario = async (req, res) => {
  //EXTRAYENDO DATOS PARA PODER ACTUALIZAR
  try {
    const { apellidoP, apellidoM, nombre, matricula, equipo } = req.body;
    let usuario = await Usuario.findById(req.params.id); //SE HACE LA PETICIÓN A LA BASE DE DATOS

    //VERIFICANDO QUE EL USUARIO NO EXISTA
    if (!usuario) {
      res.status(404).json({ msg: "El usuario no existe." });
    }

    usuario.apellidoP = apellidoP;
    usuario.apellidoM = apellidoM;
    usuario.nombre = nombre;
    usuario.matricula = matricula;
    usuario.equipo = equipo;

    usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, { new: true} )
    res.json(usuario);

  } catch (error) {
    console.log(error);
    res.status(500).send("Se ha presentado un error inesperado.");
  }
}

//REGISTRANDO USUARIOS
exports.obtenerUsuario = async (req, res) => {
  //EXTRAÑENDO DATOS PARA PODER REGISTRAR
  try {
    let usuario = await Usuario.findById(req.params.id); //SE HACE LA PETICIÓN A LA BASE DE DATOS

    //VERIFICANDO QUE EL USUARIO NO EXISTA
    if (!usuario) {
      res.status(404).json({ msg: "El usuario no existe." });
    }

    res.json(usuario);

  } catch (error) {
    console.log(error);
    res.status(500).send("Se ha presentado un error inesperado.");
  }
}

//ELIMINANDO USUARIOS
exports.eliminarUsuario = async (req, res) => {
  //EXTRAÑENDO DATOS PARA PODER RELIMINAR USUARIO
  try {
    let usuario = await Usuario.findById(req.params.id); //SE HACE LA PETICIÓN A LA BASE DE DATOS

    //VERIFICANDO QUE EL USUARIO NO EXISTA
    if (!usuario) {
      res.status(404).json({ msg: "El usuario no existe." });
    }

    await Usuario.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "El usuario ha sido eliminado con exito." });
    
  } catch (error) {
    console.log(error);
    res.status(500).send("Se ha presentado un error inesperado.");
  }
}
