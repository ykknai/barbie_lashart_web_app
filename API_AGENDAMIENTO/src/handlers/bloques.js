import HoraDisponible from '../models/HorasDisponibles.js'

export const getHorasDisponibles = async (req, res) => {
    try {
        const horas = await HoraDisponible.findAll({ order: [["id_bloque", "ASC"]] });
        res.json({ data_citas: horas });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener horas disponibles" });
    }
};