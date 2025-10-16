import { Navigate } from "react-router-dom";

export default function RutaPrivada({ children, rolNecesario }) {
    const rol = localStorage.getItem("rol");
    if (!rol) return <Navigate to="/login" />; // no logueado
    if (rolNecesario && rol !== rolNecesario) return <Navigate to="/" />; // rol no permitido
    return children;
}
