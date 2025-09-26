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
        console.log("Error al intentar conectar la BD");
        console.log(error);
    }
}

conectarBD();

server.use(Express.json())

server.use("/api", router);

export default server;
