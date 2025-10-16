import { DataTypes } from 'sequelize';
import db from '../config/database.js'; 

const Abono = db.define('abonos', {
  id_abono: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    validate: { max: 99 }
  },
  rut: {
    type: DataTypes.STRING(10),
    allowNull: false,
    references:{
      model: 'clientes',
      key: 'rut'
    }
  },
  fec_abono: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  monto_abono: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false
  },
  tipo_pago: {
    type: DataTypes.CHAR(1),
    allowNull: false,
    comment: 'A: Débito; B: Crédito; C: Transferencia'
  }
}, {
  timestamps: false
});

export default Abono;
