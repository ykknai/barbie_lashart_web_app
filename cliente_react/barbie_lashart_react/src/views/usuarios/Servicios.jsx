import { servicios, set_retoque } from '../../assets/data_services.js';

export default function Servicios() {
    return (
        <div className="container py-5 text-white">
        <div className="text-center mb-5">
            <h2 className="fw-bold" style={{color: 'palevioletred'}}>Nuestros Servicios</h2>
            <h3 className="text-muted">Descubre nuestros tratamientos especializados para realzar tu belleza.</h3>
        </div>
        <div className="row g-4">
            {/* SET Y RETOQUE */}
            {set_retoque.map((servicio) => (
            <div key={servicio.id} className="col-12 col-md-6 col-lg-4">
                <div className="card bg-light border-light h-100 text-center">
                <img className="card-img-top" src={`../../public/images/${servicio.image}`} alt={servicio.nombre} />
                <div className="card-body d-flex flex-column">
                    <h4 className="card-title">{servicio.nombre}</h4>
                    <div className="d-grid gap-2">
                        <button className='btn mt-auto' id='btn-login'>
                            <span className="fw-bold">Retirot:</span> ${servicio.precio.toLocaleString('es-CL')}
                        </button>
                    </div>
                </div>
                </div>
            </div>
            ))}
            {/* SERVICIOS OFRECIDOS */}
            {servicios.map((servicio) => (
            <div key={servicio.id} className="col-12 col-md-6 col-lg-4">
                <div className="card bg-light border-light h-100 text-center">
                <img className="card-img-top" src={`../../public/images/${servicio.image}`} alt={servicio.nombre} />
                <div className="card-body d-flex flex-column">
                    <h4 className="card-title">{servicio.nombre}</h4>
                    <div className="d-grid gap-2">
                        <button className='btn mt-auto' id='btn-login'>
                            <span className="fw-bold">Set:</span> ${servicio.precio_set.toLocaleString('es-CL')}
                        </button>
                        <button className='btn mt-auto' id='btn-login'>
                            <span className="fw-bold">Retoque:</span> ${servicio.precio_retoque.toLocaleString('es-CL')}
                        </button>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}
