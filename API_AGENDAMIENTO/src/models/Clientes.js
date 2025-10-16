import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
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
    type: DataTypes.STRING(9),
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING(254),
    allowNull: false,
    unique: true
  },
  contraseña: {
    type: DataTypes.STRING(60),
    allowNull: false
  }
}, {
  timestamps: false,
  hooks: {
    beforeCreate: async (user) => {
      if (user.contraseña) {
        const salt = await bcrypt.genSalt(10);
        user.contraseña = await bcrypt.hash(user.contraseña, salt);
      }
    },
    beforeUpdate: async (user) => {
      if (user.changed('contraseña')) {
        const salt = await bcrypt.genSalt(10);
        user.contraseña = await bcrypt.hash(user.contraseña, salt);
      }
    }
  }
});

export default Cliente;
