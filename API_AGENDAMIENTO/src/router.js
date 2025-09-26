import { Router } from "express";
import { getServicios, crearServicio, eliminarServicio, cambiarEstadoServicio } from "./handlers/servicios.js";
import { getCitas } from "./handlers/citas.js";
import { getHorasDisponibles } from "./handlers/bloques.js";
import { crearUsuario, getClientes } from "./handlers/clientes.js";
import { login } from "./handlers/autenticacion.js";
import verificarToken from "./middlewares/verificarToken.js";
import { crearAdmin } from "./handlers/administradores.js";
import { verificarTokenCliente } from "./middlewares/autenticacionUsuario.js";

const router = Router();

// Servicios endpoints.
router.get("/servicios", getServicios);
router.post("/servicios", crearServicio);
router.patch("/servicios/:id", cambiarEstadoServicio);
router.delete("/servicios/:id", eliminarServicio);

// Citas endpoints.
router.get("/citas", getCitas);

// Agendamientos endpoints.
router.get("/bloques", getHorasDisponibles);

// Agendamientos endpoints.
router.get("/clientes", getClientes);


// Usuarios endpoints
router.post('/singin', crearUsuario)
router.post('/login', login)

// Admin
router.post('/admin/singin', verificarToken, crearAdmin)

export default router;
