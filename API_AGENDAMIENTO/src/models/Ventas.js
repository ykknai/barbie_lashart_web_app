import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Venta = db.define('ventas', {
  id_venta: {
    type: DataTypes.TINYINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    validate: { max: 99 }
  },
  rut: {
    type: DataTypes.STRING(10),
    allowNull: false,
    references: {
      model: 'clientes',
      key: 'rut'
    }
  },
  id_servicio: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    references: {
      model: 'servicios',
      key: 'id_servicio'
    }
  },
  total: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false
  },
  fec_venta: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  abono: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false
  }
}, {
  timestamps: false
});

export default Venta;
