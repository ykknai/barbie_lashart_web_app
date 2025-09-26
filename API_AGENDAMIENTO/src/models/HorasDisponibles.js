import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const HoraDisponible = db.define('horas_disponibles', {
  id_bloque: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    validate: { max: 99 }
  },
  fec_bloque: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  hor_inicio: {
    type: DataTypes.TIME,
    allowNull: false
  },
  hor_termino: {
    type: DataTypes.TIME,
    allowNull: false
  },
  estado: {
    type: DataTypes.CHAR(1),
    allowNull: false
  }
}, {
  timestamps: false
});

export default HoraDisponible;
