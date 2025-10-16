import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/stylesheet.css'

export default function AdminsNavBar() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
    const storedUser = localStorage.getItem("usuario");

    if (!storedUser) return;

    try {
        const parsedUser = JSON.parse(storedUser);
        setUsuario(parsedUser);
        } catch (error) {
        console.error("Error:", error);
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
        navigate("/admin/editar_informacion/admin"); // ruta para editar info del admin
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
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id='navbar-text' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Listado
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="servicios_listado">Servicios</a></li>
                            <li><a className="dropdown-item" href="citas_listado">Citas</a></li>
                        </ul>
                    </li>
                    <li className="nav-item"><a className="nav-link" id='navbar-text' href="crear_servicio">Crear Servicio</a></li>
                    <li className="nav-item"><a className="nav-link" id='navbar-text' href="#">Horario</a></li>
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
