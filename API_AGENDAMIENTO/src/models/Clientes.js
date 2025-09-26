import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Cliente = db.define('clientes', {
  rut: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false,
    comment: 'sin puntos y con guion'
  },
  nom_cliente: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  telefono: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    validate: { max: 999999999 }
  },
  correo: {
    type: DataTypes.STRING(254),
    allowNull: false,
    unique: true
  },
  contraseña: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
});

export default Cliente;
