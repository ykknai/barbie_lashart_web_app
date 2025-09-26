export default function CrearServicio() {
    return (
        <div id="citas_mensaje">
            <div id="inicio">
                <h1>Agrega un nuevo Servicio</h1>
                <p>
                Agrega un servicio <span className="span-form">según lo necesites</span>
                </p>
            </div>

            <form id='formulario_cita' >
                {/* Nuevo Servicio */}
                <div className='mb-2'>
                <label htmlFor="bloque" className="label-formulario">
                    Nombre Servicio:
                </label>
                <br />
                <input
                    type="text"
                    id="nom_servicio"
                    name="nom_servicio"
                    placeholder="Ej: Extensiones"
                    className="form-control"
                />
                </div>
                {/* Precio Servicio set */}
                <div className='mb-2'>
                <label htmlFor="bloque" className="label-formulario">
                    Precio set $:
                </label>
                <br />
                <input
                    type="text"
                    id="precio_set"
                    name="precio_set"
                    placeholder="Ej: 12000"
                    className="form-control"
                />
                </div>
                {/* Precio Servicio retoque */}
                <div className='mb-3'>
                <label htmlFor="bloque" className="label-formulario">
                    Precio retoque $:
                </label>
                <br />
                <input
                    type="text"
                    id="precio_retoque"
                    name="precio_retoque"
                    placeholder="Ej: 15000"
                    className="form-control"
                />
                </div>
                {/* Botones */}
                <div className='d-grid gap-2'>
                <button className='btn btn-restablecer' type="button" id="btn-restablecer">
                    Restablecer
                </button>
                <button className='btn btn-confirmar' type="submit" id="btn-confirmar">
                    Confirmar
                </button>
                <a className='btn btn-primary fw-bold' href="citas_listado">
                    Volver
                </a>
                </div>
            </form>
        </div>
    );
};
