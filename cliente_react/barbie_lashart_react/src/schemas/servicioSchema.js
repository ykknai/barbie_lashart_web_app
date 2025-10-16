import { object, string, minLength } from "valibot";

export const ServicioFormSchema = object({
    nom_servicio: string([minLength(3, "El nombre debe tener al menos 3 caracteres")]),
    precio_set: string([minLength(1, "Ingresa el precio del set")]),
    precio_retoque: string([minLength(1, "Ingresa el precio del retoque")]),
});
