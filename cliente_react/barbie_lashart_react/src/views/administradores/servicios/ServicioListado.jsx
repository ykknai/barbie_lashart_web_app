import { useEffect, useState } from "react";
import axios from "axios";

export default function ServicioListado() {
    const [servicios, setServicios] = useState([]);
    const [mensaje, setMensaje] = useState("");

    const fetchServicios = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/servicios`);
            setServicios(response.data.data_servicios);
        } catch (error) {
            console.error(error);
            setMensaje("Error al cargar los servicios.");
        }
    };

    useEffect(() => {
        fetchServicios();
    }, []);

    const handleCambiarEstado = async (id) => {
        try {
            await axios.patch(`${import.meta.env.VITE_API_URL}/servicios/${id}`);
            fetchServicios();
        } catch (error) {
            console.error(error);
            setMensaje("Error al cambiar estado del servicio.");
        }
    };

    const handleEliminar = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/servicios/${id}`);
            fetchServicios();
        } catch (error) {
            console.error(error);
            setMensaje("Error al eliminar el servicio.");
        }
    };

    return (
        <div className="container py-5" id="citasListado">
            <h2 className="fw-bold text-center mb-4">Listado de Servicios</h2>

            {mensaje && <div className="alert alert-info">{mensaje}</div>}

            {servicios.length === 0 ? (
                <div className="alert alert-danger text-center p-4 rounded">
                    <strong>No hay datos por el momento.</strong>
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered table-hover text-center align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th>N°</th>
                                <th>Servicio</th>
                                <th>Precio Set</th>
                                <th>Precio Retoque</th>
                                <th>Activo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {servicios.map((serv, index) => (
                                <tr key={serv.id_servicio}>
                                    <td>{index + 1}</td>
                                    <td>{serv.nom_servicio}</td>
                                    <td>${Number(serv.precio_set).toLocaleString("es-CL")}</td>
                                    <td>
                                        {serv.precio_retoque !== null
                                            ? `$${Number(serv.precio_retoque).toLocaleString("es-CL")}`
                                            : "-"}
                                    </td>
                                    <td>{serv.estado === "A" ? "Sí" : "No"}</td>
                                    <td>
                                        {/* Botón editar */}
                                        <a
                                            className="btn btn-primary me-2"
                                            href={'servicios_editar'}
                                            title="Editar servicio"
                                        >
                                            <i className="bi bi-pencil-square"></i>
                                        </a>

                                        {/* Botón activar/desactivar con icono */}
                                        <button
                                            className={`btn me-2 ${serv.estado === "A" ? "btn-warning" : "btn-success"}`}
                                            onClick={() => handleCambiarEstado(serv.id_servicio)}
                                            title={serv.estado === "A" ? "Desactivar servicio" : "Activar servicio"}
                                        >
                                            <i className={`bi ${serv.estado === "A" ? "bi-x-circle" : "bi-check-circle"}`}></i>
                                        </button>

                                        {/* Botón eliminar */}
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleEliminar(serv.id_servicio)}
                                            title="Eliminar servicio"
                                        >
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
