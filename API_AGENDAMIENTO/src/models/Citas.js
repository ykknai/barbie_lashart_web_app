import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Cita = db.define('citas', {
  id_cita: {
    type: DataTypes.TINYINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    validate: { max: 99 }
  },
  id_servicio: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    references:{
      model: 'servicios',
      key: 'id_servicio'
    }
  },
  id_bloque: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    references: {
      model: 'agendamientos',
      key: 'id_bloque'
    }
  },
  rut: {
    type: DataTypes.STRING(10),
    allowNull: false,
    references: {
      model: 'clientes',
      key: 'rut'
    }
  },
  fec_cita: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  hor_cita: {
    type: DataTypes.TIME,
    allowNull: false
  },
  id_abono: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    references: {
      model: 'abonos',
      key: 'id_abono'
    }
  }
}, {
  timestamps: false
});

export default Cita;
