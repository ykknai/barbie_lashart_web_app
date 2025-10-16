import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        rut: "",
        nom_cliente: "",
        telefono: "",
        correo: "",
        contraseña: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        // Validaciones básicas
        if (
            !formData.rut ||
            !formData.nom_cliente ||
            !formData.telefono ||
            !formData.correo ||
            !formData.contraseña
        ) {
            setError("Todos los campos son obligatorios");
            return;
        }

        if (formData.contraseña.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/signin`, formData);
            navigate("/login");
        } catch (err) {
            console.log(response.data)
            setError(err.response?.data?.error || "Error al crear usuario");
        }
    };

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center vh-100">
                <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div className="card shadow-lg rounded-4">
                        <div className="card-body">
                            <div className="text-center mb-4">
                                <img
                                    src="/images/logo_bl_png.png"
                                    alt="Logo Empresa"
                                    className="img-fluid"
                                    style={{ maxWidth: "250px" }}
                                />
                                <h4 className="mt-2">Crear Nueva Cuenta</h4>
                            </div>

                            {error && (
                                <div className="alert alert-danger text-center">{error}</div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="rut" className="form-label">RUT</label>
                                    <input
                                        type="text"
                                        name="rut"
                                        id="rut"
                                        placeholder="12345678-9"
                                        className="form-control"
                                        value={formData.rut}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="nom_cliente" className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        name="nom_cliente"
                                        id="nom_cliente"
                                        placeholder="Nombre completo"
                                        className="form-control"
                                        value={formData.nom_cliente}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                                    <input
                                        type="text"
                                        name="telefono"
                                        id="telefono"
                                        placeholder="9 1234 5678"
                                        className="form-control"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="correo" className="form-label">Correo</label>
                                    <input
                                        type="email"
                                        name="correo"
                                        id="correo"
                                        placeholder="correo@ejemplo.com"
                                        className="form-control"
                                        value={formData.correo}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="contraseña" className="form-label">Contraseña</label>
                                    <input
                                        type="password"
                                        name="contraseña"
                                        id="contraseña"
                                        placeholder="*******"
                                        className="form-control"
                                        value={formData.contraseña}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="d-grid gap-2 mb-2">
                                    <button
                                        type="submit"
                                        className="btn btn-lg btn-primary rounded-pill"
                                    >
                                        Crear Cuenta
                                    </button>
                                </div>

                                <div className="text-center mt-3">
                                    <a href="/login" className="text-decoration-none">
                                        Ya tengo cuenta
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
