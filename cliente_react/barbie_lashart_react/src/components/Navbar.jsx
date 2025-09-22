import '../assets/stylesheet.css'

export default function NavBar(){
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
                <li className="nav-item"><a className="nav-link" id='navbar-text' href="/">Inicio</a></li>
                <li className="nav-item"><a className="nav-link" id='navbar-text' href="servicios">Servicios</a></li>
                <li className="nav-item"><a className="nav-link" id='navbar-text' href="galeria">Galería</a></li>
                <li className="nav-item"><a className="nav-link" id='navbar-text' href="contacto">Contacto</a></li>
            </ul>
            <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                <a href="login" className="btn" id='btn-login'>INICIAR SESIÓN</a>
            </div>
            </div>
        </nav>
    )
}