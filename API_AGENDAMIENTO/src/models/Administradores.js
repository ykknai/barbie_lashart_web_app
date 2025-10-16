import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import db from '../config/database.js';

const Administrador = db.define('administradores', {
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
    allowNull: false,
    defaultValue: 'A'
  }
}, {
  timestamps: false,
  hooks: {
    beforeCreate: async (admin) => {
      if (admin.contraseña) {
        const salt = await bcrypt.genSalt(10);
        admin.contraseña = await bcrypt.hash(admin.contraseña, salt);
      }
    },
    beforeUpdate: async (admin) => {
      if (admin.changed('contraseña')) {
        const salt = await bcrypt.genSalt(10);
        admin.contraseña = await bcrypt.hash(admin.contraseña, salt);
      }
    }
  }
});

export default Administrador;
