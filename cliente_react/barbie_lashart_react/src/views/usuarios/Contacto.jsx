export default function Contacto(){
    return(
        <div className="container py-5" id="contacto">
            <div className="row align-items-center">
            <div className="col-6  text-center">
                <h1 className="fw-bold text-center">Contáctanos</h1>
                <h3 className="mt-5"> <i className="bi bi-geo-alt icono-circular"></i> <strong>Ubicación:</strong> Placilla, Valparaíso, Chile</h3>
                <h3 className="mt-5"> <i className="bi bi-telephone icono-circular"></i> <strong>Teléfono:</strong> <a href="tel:+56983845885" className="link-contacto">+56 9 8384 5885</a></h3>
                <h3 className="mt-5"> <i className="bi bi-calendar4 icono-circular"></i> <strong>Horarios:</strong> Lunes a Sábado: 9:00 - 19:00</h3>
                <h3 className="mt-5"> <i className="bi bi-instagram icono-circular"></i> <strong>Instagram:</strong> <a href="www.instagram.com/sebapoto" target="_blank"  className="link-contacto">@barbie_lashart</a></h3>
            </div>
            <div className="col-6">
                <div className="card">
                    <form className="card-body px-5 py-5">   
                        <h2 className="card-title">
                            Solicita tu cotización
                        </h2>
                        <div className="row mb-3">
                            <div className="col-7">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" placeholder="FirstName LastName" required />
                            </div>
                            <div className="col-5">   
                                <label htmlFor="telefono" className="form-label">Teléfono</label>
                                <input type="text" className="form-control" id="telefono" placeholder="912345678" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-12">
                                <label htmlFor="correo" className="form-label">Correo</label>
                                <input type="text" className="form-control" id="correo" placeholder="example@gmail.com" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-12">
                                <label htmlFor="comentario" className="form-label">Comentario</label>
                                <textarea type="text" className="form-control" id="comentario" placeholder="Me guataria cotizar un retiro se set..." required />
                            </div>
                        </div>
                        <div className="d-grid flex-wrap gap-3">
                            <a href="https://wa.me/56983845885" target="_blank" className="btn" id="btn-wsp"> <i className="bi bi-whatsapp"></i> WHATSAPP</a>
                            <button type="submit" className="btn" id="btn-login"> <i className="bi bi-send"></i> ENVIAR COTIZACIÓN</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}