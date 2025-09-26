import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "clave_secreta";

export const verificarTokenCliente = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "No autorizado" });

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.usuario = decoded; // { rut, rol }
        next();
    } catch (error) {
        res.status(401).json({ message: "Token inválido" });
    }
};

export const soloAdmin = (req, res, next) => {
    if (req.usuario.rol !== "admin") return res.status(403).json({ message: "Acceso denegado" });
    next();
};
