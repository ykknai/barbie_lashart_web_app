import { Router } from "express";
import { getServicios, crearServicio, eliminarServicio, cambiarEstadoServicio, editarServicio, getServicioConId } from "./handlers/servicios.js";
import { getCitas } from "./handlers/citas.js";
import { getHorasDisponibles } from "./handlers/bloques.js";
import { crearUsuarioCliente, getClientes } from "./handlers/clientes.js";
import verificarToken from "./middlewares/verificarToken.js";
import { crearAdmin } from "./handlers/administradores.js";
import { login } from "./handlers/autenticacion.js";
import { soloAdmin, verificarTokenCliente } from "./middlewares/autenticacionUsuario.js";

const router = Router();

// Servicios endpoints.
router.get("/servicios", getServicios);
router.get("/servicios/:id", getServicioConId);
router.post("/servicios", crearServicio);
router.patch("/servicios/:id", cambiarEstadoServicio);
router.delete("/servicios/:id", eliminarServicio);
router.patch("/servicios_editar/:id", editarServicio);

// Citas endpoints.
router.get("/citas", getCitas);

// Agendamientos endpoints.
router.get("/bloques", getHorasDisponibles);

// Usuarios
router.post("/signin", crearUsuarioCliente);
router.post("/login", login);
router.get("/clientes", verificarTokenCliente, soloAdmin, getClientes);

// Admin
router.post('/admin/signin', verificarToken, crearAdmin)

export default router;
