import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/stylesheet.css'

export default function UsuariosNavBar() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
    const storedUser = localStorage.getItem("usuario");

    // Si no existe nada en localStorage, salimos
    if (!storedUser) return;

    try {
      // Intentamos parsear el JSON
      const parsedUser = JSON.parse(storedUser);
      setUsuario(parsedUser);
    } catch (error) {
      console.error("❌ Error al parsear el usuario:", error);
      // En caso de error, dejamos usuario vacío
      setUsuario({});
    }
  }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("rol");
        localStorage.removeItem("usuario");
        setUsuario(null);
        navigate("/login");
    };

    const handleEditar = () => {
        navigate("/editar_informacion"); // ruta donde el usuario edita sus datos
    };

    return (
        <nav className="navbar navbar-expand-lg px-4">
            <a className="navbar-brand" href="/">
                <img src="../public/images/logo_bl_png.png" alt="Logo Lashista" width={50} height={50} id='pyme-icon' />
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
                    {!usuario && (
                        <button className="btn" id='btn-login' onClick={() => navigate("/login")}>
                            INICIAR SESIÓN
                        </button>
                    )}

                    {usuario && (
                        <>
                            <button className="btn me-2" id='btn-editar' onClick={handleEditar}>
                                EDITAR INFORMACIÓN
                            </button>
                            <button className="btn" id='btn-logout' onClick={handleLogout}>
                                CERRAR SESIÓN
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}
