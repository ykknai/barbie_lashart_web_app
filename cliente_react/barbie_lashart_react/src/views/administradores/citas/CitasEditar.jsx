import { useState } from 'react';

export default function CitasEditar() {
    const [razon, setRazon] = useState('');
    const [servicio, setServicio] = useState('');

    const servicios = [
        'Clásicas',
        'Rímel',
        'Efecto Mojado',
        'Anime',
        'Volumen sutil artesanal',
        'Volumen sutil ruso',
        'Retiro set (local)',
        'Retiro set (externo)',
        'Retiro de máscara de pestañas',
    ];

    const handleReset = () => {
        setRazon('');
        setServicio('');
        // Aquí podrías limpiar otros campos si agregas lógica
    };

    return (
        <div id="citas_editar">
            <div id="inicio">
                <h1>Editar Cita</h1>
                <p>
                Modifica los datos de tu cita <span className="inicio-span">según lo necesites</span>
                </p>
            </div>

            <form id='formulario_cita' >
                {/* Nueva Fecha */}
                <div >
                <label htmlFor="fecha" className="label-formulario">
                    Nueva Fecha:
                </label>
                <br />
                <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    className="input-formulario"
                />
                </div>

                {/* Nuevo Bloque */}
                <div >
                <label htmlFor="bloque" className="label-formulario">
                    Nuevo Bloque:
                </label>
                <br />
                <select
                    id="bloque"
                    className="input-formulario"
                >
                    <option value="">Selecciona un bloque</option>
                    <option >Mañana</option>
                    <option >Medio día</option>
                    <option >Tarde</option>
                </select>
                </div>

                {/* Razón del cambio */}
                <div >
                <label htmlFor="razon" className="label-formulario">
                    Razón del cambio:
                </label>
                <br />
                <select
                    id="razon"
                    value={razon}
                    onChange={(e) => setRazon(e.target.value)}
                    className="input-formulario"
                >
                    <option value="">Selecciona una razón</option>
                    <option value="cambio">Cambio de servicio</option>
                    <option value="otro">Otro</option>
                </select>
                </div>

                {/* Servicios (solo si se selecciona "Cambio de servicio") */}
                {razon === 'cambio' && (
                <div className='mb-2'>
                    <label htmlFor="servicio" className="label-formulario">
                    Nuevo Servicio:
                    </label>
                    <br />
                    <select
                    id="servicio"
                    value={servicio}
                    onChange={(e) => setServicio(e.target.value)}
                    className="input-formulario"
                    >
                    <option value="">Selecciona un servicio</option>
                    {servicios.map((serv, index) => (
                        <option key={index} value={serv}>
                        {serv}
                        </option>
                    ))}
                    </select>
                </div>
                )}

                {/* Botones */}
                <div className='d-grid gap-2 mb-2'>
                <button className='btn btn-restablecer' type="button" id="btn-restablecer" onClick={handleReset}>
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
