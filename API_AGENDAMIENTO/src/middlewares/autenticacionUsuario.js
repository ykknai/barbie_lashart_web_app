import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.SECRET_KEY || "clave_secreta";

export const verificarTokenCliente = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "No autorizado" });

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Token inválido" });
    }
};

export const soloAdmin = (req, res, next) => {
    if (req.usuario.rol !== "A") return res.status(403).json({ message: "Acceso denegado" });
    next();
};
