import Servicio from "../models/Servicios.js";

export const crearServicio = async (req, res) => {
  try {
    const { nom_servicio, precio_set, precio_retoque } = req.body;

    if (!nom_servicio || !precio_set || !precio_retoque) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const nuevoServicio = await Servicio.create({
      nom_servicio,
      precio_set,
      precio_retoque,
      estado: 'A',
    });

    res.status(201).json(nuevoServicio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear servicio" });
  }
};

export const getServicios = async (req, res) => {
  try {
    const servicios = await Servicio.findAll({ order: [["id_servicio", "ASC"]] });
    res.json({ data_servicios: servicios });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener servicios" });
  }
};

// Cambiar estado de un servicio
export const cambiarEstadoServicio = async (req, res) => {
  try {
    const { id } = req.params;
    const servicio = await Servicio.findByPk(id);

    if (!servicio) return res.status(404).json({ msg: "Servicio no encontrado" });

    // Alternar entre A (activo) e I (inactivo)
    servicio.estado = servicio.estado === "A" ? "I" : "A";
    await servicio.save();

    res.json({ msg: "Estado actualizado", servicio });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al actualizar estado" });
  }
};

// Eliminar servicio
export const eliminarServicio = async (req, res) => {
  try {
    const { id } = req.params;
    const servicio = await Servicio.findByPk(id);

    if (!servicio) return res.status(404).json({ msg: "Servicio no encontrado" });

    await servicio.destroy();
    res.json({ msg: "Servicio eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al eliminar servicio" });
  }
};
