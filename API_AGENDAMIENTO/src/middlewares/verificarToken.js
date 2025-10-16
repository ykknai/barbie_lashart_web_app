export default function verificarToken(req, res, next) {
    const token = req.headers['x-admin-create-token'];

    if (!token || token !== process.env.ADMIN_CREATION_TOKEN) {
        return res.status(403).json({ message: "Token de creación inválido o ausente" });
    }

    next();
}
