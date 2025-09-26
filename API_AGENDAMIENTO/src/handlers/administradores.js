// handlers/crearAdmin.js
import Administrador from "../models/Admninistradores.js";

export const crearAdmin = async (req, res) => {
    const tokenCreacion = req.headers["x-admin-create-token"] || req.body.admin_creation_token;

    if (!tokenCreacion || tokenCreacion !== process.env.ADMIN_CREATION_TOKEN) {
        return res.status(403).json({ message: "Token de creación inválido o ausente" });
    }

    try {
        const { nom_admin, correo, contraseña, rol = "A" } = req.body;

        if (!correo || !contraseña) {
            return res.status(400).json({ message: "Faltan datos requeridos" });
        }

        const existente = await Administrador.findOne({ where: { correo } });
        if (existente) return res.status(400).json({ message: "Correo ya registrado" });

        const nuevoAdmin = await Administrador.create({
            nom_admin,
            correo,
            contraseña, 
            rol
        });

        const adminObj = nuevoAdmin.toJSON();
        delete adminObj.contraseña;

        res.status(201).json({ message: "Administrador creado", admin: adminObj });
    } catch (error) {
        console.error("Error al crear administrador:", error);
        res.status(500).json({ message: "Error al crear administrador" });
    }
};
