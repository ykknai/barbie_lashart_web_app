import { servicios, set_retoque } from "../../../assets/data_services"

export default function ServicioListado() {
    // Adaptar set_retoque para que tenga los mismos campos que servicios
    const setRetoqueAdaptado = set_retoque.map(item => ({
        nombre: item.nombre,
        precio_set: item.precio,
        precio_retoque: null,
        estado: true, // o false, según prefieras
    }));

    // Unir ambos arrays
    const todosServicios = [...servicios, ...setRetoqueAdaptado];

    return (
        <div className="container py-5" id="citasListado">
        <h2 className="fw-bold text-center mb-4">Listado de Servicios</h2>

        {todosServicios.length === 0 ? (
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
                {todosServicios.map((serv, index) => (
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{serv.nombre}</td>
                    <td>${serv.precio_set.toLocaleString('es-CL')}</td>
                    <td>{serv.precio_retoque !== null ? `$${serv.precio_retoque.toLocaleString('es-CL')}` : '-'}</td>
                    <td>{serv.estado ? 'Si' : 'No'}</td>
                    <td>
                        <a className="btn btn-primary me-2" href="servicios_editar" title="Editar servicio">
                        <i className="bi bi-pencil-square"></i>
                        </a>
                        <a className="btn btn-danger me-2" href="#" title="Eliminar servicio">
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
};