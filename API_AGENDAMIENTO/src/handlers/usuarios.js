const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function crearUsuario(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ error: 'Error, email y password son necesarias !!' });
  }

  if (password.length < 6) {
    return res.status(404).json({ error: 'La nueva contraseña debe tener al menos 6 caracteres' });
  }

  try {
    const usuario = await Usuario.findByPk(email);
    if (usuario) {
      return res.status(402).json({ error: 'Error, el usuario ya está registrado en la Base de Datos x.x' });
    }

    const newUsuario = await Usuario.create({ email, password });
    res.status(200).json({ msg: 'Usuario creado con éxito !' });
  } catch (error) {
    console.log('Error, no se logró crear el usuario x.x');
    res.status(500).json({ error: 'Error interno x.x' });
  }
}

module.exports = { crearUsuario };
