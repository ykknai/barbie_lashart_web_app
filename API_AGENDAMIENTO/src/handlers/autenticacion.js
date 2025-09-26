import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Cliente from "../models/Clientes.js";
import Administrador from "../models/Admninistradores.js";

export const login = async (req, res) => {
    const { correo, contraseña } = req.body;
    const JWT_SECRET = process.env.SECRET_KEY;

    try {
        let usuario = await Administrador.findOne({ where: { correo } });
        let rol = "A";

        if (!usuario) {
            usuario = await Cliente.findOne({ where: { correo } });
            rol = "C";
        }

        if (!usuario) return res.status(401).json({ message: "Usuario no encontrado" });

        // Compara la contraseña con el hash guardado
        const isValidPassword = await bcrypt.compare(contraseña, usuario.contraseña);

        if (!isValidPassword) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        const token = jwt.sign(
            { rut: usuario.rut, rol },
            JWT_SECRET,
            { expiresIn: "2h" }
        );

        res.json({ token, rol });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en login" });
    }
};
