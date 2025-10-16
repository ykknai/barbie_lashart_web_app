import { useState } from "react";
import '../../assets/css/stylesheet.css';

export default function EditarInformacionAdmin() {
    const [formData, setFormData] = useState({
        rut: "12345678-9",
        nombre: "Nombre Apellido",
        telefono: "912345678",
        correo: "correo@ejemplo.com"
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Por ahora no hace nada
    };

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center vh-100">
                <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div className="card shadow-lg rounded-4">
                        <div className="card-body">
                            <div className="text-center mb-4">
                                <h2 className="mt-2">Editar Información</h2>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        id="nombre"
                                        className="form-control"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                                    <input
                                        type="text"
                                        name="telefono"
                                        id="telefono"
                                        className="form-control"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="correo" className="form-label">Correo</label>
                                    <input
                                        type="email"
                                        name="correo"
                                        id="correo"
                                        className="form-control"
                                        value={formData.correo}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="d-grid gap-2 mb-2">
                                    <button type="submit" className="btn btn-lg btn-primary rounded-pill">
                                        Guardar Cambios
                                    </button>
                                </div>

                                <div className="text-center mt-3">
                                    <a href="/admin/servicios_listado" className="text-decoration-none">
                                        Cancelar
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
