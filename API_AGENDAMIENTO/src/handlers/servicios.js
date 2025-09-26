const Arriendo = require('../models/Arriendo');
const { Op } = require('sequelize');

async function crearArriendo(req, res) {
  try {
    const datosArriendo = req.body;

    if (!datosArriendo) {
      res.json('Error, hay contenido vacío x.x');
    } else {
      const arriendoData = {
        ...datosArriendo,
        fechaInicio: new Date().toISOString().split('T')[0],
        fechaFin: null,
      };

      const nuevoArriendo = await Arriendo.create(arriendoData);

      res.json({ data: nuevoArriendo });
      console.log('Se ha creado un arriendo exitosamente !');
    }
  } catch (error) {
    res.json('Error, no se pudo crear el arriendo x.x');
    console.log(error);
  }
}

module.exports = { crearArriendo };
