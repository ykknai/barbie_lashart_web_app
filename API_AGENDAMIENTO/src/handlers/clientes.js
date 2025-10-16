import Cliente from '../models/Clientes.js';

export const crearUsuarioCliente = async (req, res) => {
    const { rut, nom_cliente, telefono, correo, contraseña } = req.body;

    if (!rut || !nom_cliente || !telefono || !correo || !contraseña) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    if (contraseña.length < 6) {
        return res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres' });
    }

    try {
        const usuarioExistente = await Cliente.findOne({ where: { correo } });
        if (usuarioExistente) {
            return res.status(400).json({ error: 'El usuario ya está registrado' });
        }

        const newUsuario = await Cliente.create({ rut, nom_cliente, telefono, correo, contraseña });

        res.status(201).json({ msg: 'Usuario creado con éxito', usuario: newUsuario });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
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
