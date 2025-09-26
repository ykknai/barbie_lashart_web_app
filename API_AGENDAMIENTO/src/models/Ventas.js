import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Venta = db.define('ventas', {
  id_venta: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
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
  id_abono: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references:{
      model: 'abonos',
      key: 'id_abono'
    }
  }
}, {
  timestamps: false
});

export default Venta;
