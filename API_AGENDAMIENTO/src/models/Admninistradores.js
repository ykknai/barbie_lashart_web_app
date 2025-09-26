import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Administrador = db.define('admninistradores', {
  id_admin: {
    type: DataTypes.TINYINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    validate: { max: 99 }
  },
  nom_admin: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING(254),
    allowNull: false,
    unique: true
  },
  contraseña: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  rol: {
    type: DataTypes.CHAR(1),
    allowNull: false
  }
}, {
  timestamps: false
});

export default Administrador;
