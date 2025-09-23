export default function CitasMensaje() {
    return (
        <div id="citas_mensaje">
            <div id="inicio">
                <h1>Comunícate con el Cliente</h1>
                <p>
                Mandale un mensaje al cliente <span className="span-form">según lo necesites</span>
                </p>
            </div>

            <form id='formulario_cita' >
                {/* Nueva Fecha */}
                <div className='mb-2'>
                <label htmlFor="fecha" className="form-label label-formulario">
                    Cliente: <span className="span-form ms-3">Magdalena Navarrete</span> <br /> Rut: <span className="span-form ms-5">21655331-4</span>
                </label>
                <br />
                </div>

                {/* Nuevo Bloque */}
                <div className='mb-2'>
                <label htmlFor="bloque" className="label-formulario">
                    Mensaje:
                </label>
                <br />
                <textarea
                    type="text"
                    id="bloque"
                    name="bloque"
                    placeholder="Mensaje para el cliente"
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
                </div>
            </form>
        </div>
    );
};
