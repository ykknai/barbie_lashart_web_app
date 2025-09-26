import { Cita, Cliente, Servicio } from "../models/index.js";

export const getCitas = async (req, res) => {
    try {
        const citas = await Cita.findAll({
            include: [
                { model: Cliente, attributes: ["nom_cliente", "correo"] },
                { model: Servicio, attributes: ["nom_servicio"] },
            ],
            order: [["id_cita", "ASC"]],
        });

        res.json({ data_citas: citas });
    } catch (error) {
        console.error("Error en getCitas:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

