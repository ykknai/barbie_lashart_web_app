import citas from "../../assets/data_citas";

export default function DashboardCitas() {
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
                    <th>Cliente</th>
                    <th>RUT</th>
                    <th>Correo</th>
                    <th>Servicio Escogido</th>
                    <th>Otros</th>
                    <th>Fecha</th>
                    <th>Bloque</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {citas.map((cita, index) => (
                    <tr key={index}>
                    <td>{cita.nombre}</td>
                    <td>{cita.rut}</td>
                    <td>{cita.correo}</td>
                    <td>{cita.servicio_escogido}</td>
                    <td>{cita.otros}</td>
                    <td>{cita.fecha}</td>
                    <td>{cita.bloque}</td>
                    <td>
                        <button className="btn btn-danger me-2" title="Eliminar cita">
                        <i className="bi bi-trash"></i>
                        </button>
                        <button className="btn btn-primary" title="Enviar mensaje">
                        <i className="bi bi-send"></i>
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
