import cors from 'cors'
import Express from "express";
import router from "./router.js";
import db from "./config/database.js";
import './models/index.js'

const server = Express();

async function conectarBD() {
    try {
        await db.authenticate();
        await db.sync();
        console.log("¡Conexión con la BD exitosa!");
    } catch (error) {
        console.log("Error al intentar conectar la BD, ", error);
    }
}

conectarBD();

// Define corsOptions outside of server.use
const corsOptions = {
    origin: function (origin, callback) {
        // Permitir acceso desde Postman (sin origin) y desde tu frontend
        if (!origin || origin === process.env.FRONTEND_URL) {
            callback(null, true); // Permitir
        } else {
            callback(new Error('Error de CORS'), false); // Rechazar
        }
    }
};

server.use(cors(corsOptions));

server.use(Express.json())
server.use(Express.urlencoded({ extended: true }));

server.use("/api", router);


export default server;
