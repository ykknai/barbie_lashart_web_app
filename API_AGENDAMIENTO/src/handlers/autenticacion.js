import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Cliente from "../models/Clientes.js";
import Administrador from "../models/Administradores.js";

const SECRET_KEY = process.env.SECRET_KEY || "clave_secreta";

export const login = async (req, res) => {
    const { correo, contraseña } = req.body;

    if (!correo || !contraseña)
        return res.status(400).json({ error: "Correo y contraseña son obligatorios" });

    try {
        let usuario = await Administrador.findOne({ where: { correo } });
        let rol = "A";

        if (!usuario) {
            usuario = await Cliente.findOne({ where: { correo } });
            rol = "C";
        }

        if (!usuario) return res.status(401).json({ error: "Usuario no encontrado" });

        const isValidPassword = await bcrypt.compare(contraseña, usuario.contraseña);
        if (!isValidPassword) return res.status(401).json({ error: "Contraseña incorrecta" });

        const token = jwt.sign({ rut: usuario.rut || usuario.id_admin, rol }, SECRET_KEY, { expiresIn: "2h" });

        res.json({
            token,
            rol,
            usuario: {
                rut: usuario.rut || usuario.id_admin,
                nombre: usuario.nom_cliente || usuario.nom_admin,
                correo: usuario.correo
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en login" });
    }
};
