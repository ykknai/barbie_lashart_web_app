import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Servicio = db.define('servicios', {
  id_servicio: {
    type: DataTypes.TINYINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    validate: { max: 99 }
  },
  nom_servicio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  precio_set: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false
  },
  precio_retoque: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false
  },
  estado: {
    type: DataTypes.CHAR(1),
    allowNull: false
  }
}, {
  timestamps: false
});

export default Servicio;
