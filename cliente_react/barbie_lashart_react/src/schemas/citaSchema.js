import { object, string, date, number } from "valibot";

export const CitaSchema = object({
    id_cita: number(),
    id_servicio: number(),
    id_bloque: number(),
    rut: string(),
    fec_cita: date(),
    hor_cita: time(),
    Cliente: object({
        nom_cliente: string(),
        correo: string(),
    }),
    Servicio: object({
        nom_servicio: string(),
    }),
});
