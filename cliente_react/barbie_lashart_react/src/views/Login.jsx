import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ correo: "", contraseña: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.correo || !formData.contraseña) {
      setError("Correo y contraseña son obligatorios");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        formData
      );

      const { token, rol, usuario } = response.data;

      // Guardar datos en localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("rol", rol);
      localStorage.setItem("usuario", JSON.stringify(usuario));

      // Redirección según rol
      if (rol === "A") navigate("/admin/servicios_listado");
      else navigate("/");
    } catch (err) {
      console.error(err);

      if (err.response) {
        // El backend respondió con un error
        setError(err.response.data.error || "Error al iniciar sesión");
      } else if (err.request) {
        // No hubo respuesta del servidor
        setError("No se pudo conectar con el servidor");
      } else {
        // Otro tipo de error
        setError("Ocurrió un error inesperado");
      }
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
                  alt="Logo"
                  className="img-fluid"
                  style={{ maxWidth: "250px" }}
                />
                <h4 className="mt-2">Iniciar sesión</h4>
              </div>

              {error && <div className="alert alert-danger text-center">{error}</div>}

              <form onSubmit={handleSubmit}>
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
                    Entrar
                  </button>
                </div>

                <div className="text-center mt-3">
                  <a
                    href="/signin"
                    className="text-decoration-none"
                    onClick={() => setFormData({ correo: "", contraseña: "" })}
                  >
                    Crear cuenta
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
