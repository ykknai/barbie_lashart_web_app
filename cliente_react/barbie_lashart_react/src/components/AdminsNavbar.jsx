import '../assets/css/stylesheet.css'

export default function AdminsNavBar(){
    return(
        <nav className="navbar navbar-expand-lg px-4">
            <a className="navbar-brand" href="/">
                <img src="../public/images/logo_bl_png.png" alt="Logo Lashista" width={50} height={50} id='pyme-icon'/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav me-3">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id='navbar-text' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Listado
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="citas_listado">Citas</a></li>
                        <li><a class="dropdown-item" href="servicios_listado">Servicios</a></li>
                    </ul>
                </li>
                <li className="nav-item"><a className="nav-link" id='navbar-text' href="crear_servicio">Crear Servicio</a></li>
                <li className="nav-item"><a className="nav-link" id='navbar-text' href="#">Horario</a></li>
            </ul>
            <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                <a href="/" className="btn" id='btn-login'>INICIAR SESIÓN</a>
            </div>
            </div>
        </nav>
    )
}