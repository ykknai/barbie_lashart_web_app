import axios from "axios";
import { safeParse } from "valibot";
import { ServicioFormSchema } from "../schemas/servicioSchema";

export async function crearServicio(formData) {
    try {
        const resultado = safeParse(ServicioFormSchema, formData);

        if (!resultado.success) {
            const dicErrores = {};
            for (const issue of resultado.issues) {
                const campo = issue.path?.[0];
                if (!dicErrores[campo]) dicErrores[campo] = [];
                dicErrores[campo].push(issue.message);
            }
            return {
                success: false,
                error: "Hay errores en los datos ingresados.",
                dicErrores,
            };
        }

        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/servicios`,
            formData
        );

        return { success: true, data: response.data };
    } catch (error) {
        return {
            success: false,
            error: error.response?.data?.error ?? "Error al crear el servicio.",
        };
    }
}

export async function cambiarEstadoServicio(id, nuevoEstado) {
    try {
        const response = await axios.patch(
            `${import.meta.env.VITE_API_URL}/servicios/${id}`,
            { estado: nuevoEstado }
        );
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error: error.response?.data?.msg || "Error al cambiar estado." };
    }
}

export async function eliminarServicio(id) {
    try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/servicios/${id}`);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.response?.data?.msg || "Error al eliminar." };
    }
}
