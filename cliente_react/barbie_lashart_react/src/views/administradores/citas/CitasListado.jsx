import { useEffect, useState } from "react";
import { getCitas } from "../../../services/citasService";

export default function CitasListado() {
    const [citas, setCitas] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCitas = async () => {
        try {
            const data = await getCitas();
            setCitas(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCitas();
    }, []);

    if (loading) {
        return <div className="text-center py-5">Cargando citas...</div>;
    }

    return (
        <div className="container py-5" id="citasListado">
            <h2 className="fw-bold text-center mb-4">Listado de Citas Agendadas</h2>

            {citas.length === 0 ? (
                <div className="alert alert-danger text-center p-4 rounded">
                    <strong>No hay datos por el momento.</strong>
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered table-hover text-center align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th>N°</th>
                                <th>Cliente</th>
                                <th>RUT</th>
                                <th>Correo</th>
                                <th>Servicio Escogido</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {citas.map((cita, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{cita.cliente.nom_cliente}</td>
                                    <td>{cita.rut}</td>
                                    <td>{cita.cliente.correo}</td>
                                    <td>{cita.servicio.nom_servicio}</td>
                                    <td>{cita.fec_cita}</td>
                                    <td>{cita.hor_cita}</td>
                                    <td>
                                        <a className="btn btn-primary me-2" href="citas_editar" title="Editar cita">
                                            <i className="bi bi-pencil-square"></i>
                                        </a>
                                        <a className="btn btn-success me-2" href="citas_mensaje" title="Enviar mensaje">
                                            <i className="bi bi-send"></i>
                                        </a>
                                        <a className="btn btn-danger me-2" href="crear_servicio" title="Eliminar cita">
                                            <i className="bi bi-trash"></i>
                                        </a>
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
