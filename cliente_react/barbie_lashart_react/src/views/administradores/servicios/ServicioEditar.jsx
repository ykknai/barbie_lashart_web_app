export default function ServicioEditar() {
    return (
        <div id="servicio_editar">
            <div id="inicio">
                <h1>Editar Servicio</h1>
                <p>
                Modifica los datos del servicio <span className="inicio-span">según lo necesites</span>
                </p>
            </div>

            <form id='formulario_cita' >
                {/* Nueva Fecha */}
                <div className="mb-3">
                <label htmlFor="fecha" className="label-formulario">
                    Nuevo nombre:
                </label>
                <br />
                <input
                    type="text"
                    id="nuevo_nombre"
                    name="nuevo_nombre"
                    className="form-control"
                />
                </div>
                {/* Nueva precio set */}
                <div className="mb-3">
                <label htmlFor="fecha" className="label-formulario">
                    Precio set:
                </label>
                <br />
                <input
                    type="text"
                    id="precio_set"
                    name="precio_set"
                    className="form-control"
                />
                </div>
                {/* Nueva precio retoque */}
                <div className="mb-3">
                <label htmlFor="fecha" className="label-formulario">
                    Precio Retoque:
                </label>
                <br />
                <input
                    type="text"
                    id="precio_retoque"
                    name="precio_retoque"
                    className="form-control"
                />
                </div>
                {/* Botones */}
                <div className='d-grid gap-2 mb-2'>
                <button className='btn btn-restablecer' type="button" id="btn-restablecer">
                    Restablecer
                </button>
                <button className='btn btn-confirmar' type="submit" id="btn-confirmar">
                    Confirmar
                </button>
                <a className='btn btn-primary fw-bold' href="servicios_listado">
                    Volver
                </a>
                </div>
            </form>
        </div>
    );
};
