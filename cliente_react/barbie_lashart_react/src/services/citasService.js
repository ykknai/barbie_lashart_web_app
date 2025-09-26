import axios from "axios";

export const getCitas = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/citas`);
        return response.data.data_citas;
    } catch (error) {
        console.error("Error al obtener citas:", error);
        throw error;
    }
};
