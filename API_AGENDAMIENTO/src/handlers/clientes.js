import Cliente from "../models/Clientes.js";

export const crearUsuario = async (req, res) => {
    const { rut, nom_cliente, telefono, correo, contraseña } = req.body;

    try {
        // Validar que no exista correo
        const usuarioExistente = await Cliente.findOne({ where: { correo } });
        if (usuarioExistente) {
            return res.status(400).json({ message: "El correo ya está registrado" });
        }

        // Crear usuario: el hook del modelo hace el hash
        const nuevoUsuario = await Cliente.create({
            rut,
            nom_cliente,
            telefono,
            correo,
            contraseña
        });

        res.status(201).json({ message: "Usuario creado correctamente", usuario: nuevoUsuario });
    } catch (error) {
        console.error("Error en crearUsuario:", error);
        res.status(500).json({ message: "Error al crear usuario" });
    }
};

export const getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll({ order: [["rut", "ASC"]] });
        res.json({ data_clientes: clientes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener clientes" });
    }
};