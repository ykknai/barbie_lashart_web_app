import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT,
    define: { timestamps: false },
  }
);

export default db;
