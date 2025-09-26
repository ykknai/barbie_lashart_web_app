//Importacion de modelos
import Abono from './Abonos.js';
import Administrador from './Admninistradores.js';
import HorasDisponibles from './HorasDisponibles.js';
import Cita from './Citas.js';
import Cliente from './Clientes.js';
import Servicio from './Servicios.js';
import Venta from './Ventas.js';


// Relaciones

//Relacion Clientes 1:N Citas
Cliente.hasMany(Cita, { foreignKey: 'rut' }); Cita.belongsTo(Cliente, { foreignKey: 'rut' });
//Relacion Clientes 1:N Abonos
Cliente.hasMany(Abono, { foreignKey: 'rut' }); Abono.belongsTo(Cliente, { foreignKey: 'rut' });
//Relacion Clientes 1:N Venta
Cliente.hasMany(Venta, { foreignKey: 'rut' }); Venta.belongsTo(Cliente, { foreignKey: 'rut' });

//Relacion Servicios 1:N Cita
Servicio.hasMany(Cita, { foreignKey: 'id_servicio' }); Cita.belongsTo(Servicio, { foreignKey: 'id_servicio' });
//Relacion Servicios 1:N Venta
Servicio.hasMany(Venta, { foreignKey: 'id_servicio' }); Venta.belongsTo(Servicio, { foreignKey: 'id_servicio' });

//Relacion HoraDisponible 1:N Cita
HorasDisponibles.hasMany(Cita, { foreignKey: 'id_bloque' }); Cita.belongsTo(HorasDisponibles, { foreignKey: 'id_bloque' });

//Relacion Abonos 1:1 Cita
Abono.hasOne(Cita, { foreignKey: 'id_abono' }); Cita.belongsTo(Abono, { foreignKey: 'id_abono' });

// Exportar modelos
export {
    Abono,
    Administrador,
    HorasDisponibles,
    Cita,
    Cliente,
    Servicio,
    Venta,
};
