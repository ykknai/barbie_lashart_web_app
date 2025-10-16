import trabajos from "../../assets/data_trabajos";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Galeria() {
    return (
        <div className="container py-5 text-center">
        <h2 className="fw-bold mb-4" style={{color: 'palevioletred'}}>Trabajos Realizados</h2>
        <h3 className="text-muted">Deposita tu confianza conmigo y enbellece tus pestañas</h3>
        <div
            id="trabajosCarrusel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="1500"
            data-bs-pause="hover"
        >
            <div className="carousel-inner">
            {trabajos.map((trabajo, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img
                    src={`/images/${trabajo.imagen}`}
                    className="d-block w-100 rounded shadow"
                    alt={`Trabajo ${index+1}`}
                    style={{ maxHeight: "450px", objectFit: "cover" }}
                />
                {trabajo.descripcion && (
                    <div className="carousel-caption d-none d-md-block">
                    <p>{trabajo.descripcion}</p>
                    </div>
                )}
                </div>
            ))}
            </div>

            {/* Controles */}
            <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#trabajosCarrusel"
            data-bs-slide="prev"
            >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
            </button>
            <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#trabajosCarrusel"
            data-bs-slide="next"
            >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">S</span>
            </button>
        </div>
        </div>
    );
}
