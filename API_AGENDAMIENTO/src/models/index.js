//Importacion de modelos
import Abono from './Abonos.js';
import Agendamiento from './Agendamientos.js';
import Adminitrador from './Admninistradores.js'
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

//Relacion Agendamientos 1:N Cita
Agendamiento.hasMany(Cita, { foreignKey: 'id_bloque' }); Cita.belongsTo(Agendamiento, { foreignKey: 'id_bloque' });

//Relacion Abonos 1:1 Cita
Abono.hasOne(Cita, { foreignKey: 'id_abono' }); Cita.belongsTo(Abono, { foreignKey: 'id_abono' });

// Exportar modelos
export {
    Abono,
    Agendamiento,
    Adminitrador,
    Cita,
    Cliente,
    Servicio,
    Venta,
};
