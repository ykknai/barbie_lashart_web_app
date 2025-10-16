import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ServicioEditar() {
    const { id } = useParams(); // Obtiene el ID de la URL
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nuevo_nombre: "",
        precio_set: "",
        precio_retoque: ""
    });

    const [datosPrincipales, setDatosPrincipales] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [mensajesCorrectos, setMensajesCorrectos] = useState("");

    useEffect(() => {
        const fetchServicio = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/servicios/${id}`
                );
                const servicio = response.data;

                setFormData({
                    nuevo_nombre: servicio.nom_servicio,
                    precio_set: servicio.precio_set,
                    precio_retoque: servicio.precio_retoque
                });

                setDatosPrincipales({
                    nuevo_nombre: servicio.nom_servicio,
                    precio_set: servicio.precio_set,
                    precio_retoque: servicio.precio_retoque
                });

                setLoading(false);
            } catch (err) {
                console.error(err);
                setError("Error al cargar el servicio");
                setLoading(false);
            }
        };
        fetchServicio();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleReset = () => {
        setFormData(datosPrincipales);
        setError("");
        setMensajesCorrectos("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setMensajesCorrectos("");

        try {
            const token = localStorage.getItem("token"); // Token guardado en login

            await axios.patch(
                `${import.meta.env.VITE_API_URL}/servicios_editar/${id}`,
                {
                    nuevo_nombre: formData.nuevo_nombre,
                    precio_set: formData.precio_set,
                    precio_retoque: formData.precio_retoque
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            // Mostrar mensaje de éxito
            setMensajesCorrectos("Servicio actualizado con éxito");

            // Navegar automáticamente después de 2 segundos
            setTimeout(() => {
                navigate("/admin/servicios_listado");
            }, 2000);

        } catch (err) {
            console.error(err);
            setError("Error al actualizar el servicio. Verifica los datos.");
        }
    };

    if (loading) return <p>Cargando datos del servicio...</p>;

    return (
        <div id="servicio_editar">
            <div id="inicio">
                <h1>Editar Servicio</h1>
                <p>
                    Modifica los datos del servicio{" "}
                    <span className="inicio-span">según lo necesites</span>
                </p>
            </div>

            {/* Mensaje de éxito */}
            {mensajesCorrectos && (
                <div className="alert alert-success mb-3">{mensajesCorrectos}</div>
            )}

            {/* Mensaje de error */}
            {error && (
                <div className="alert alert-success mb-3">{error}</div>
            )}

            <form id="formulario_cita" onSubmit={handleSubmit}>
                {/* Nuevo nombre */}
                <div className="mb-3">
                    <label htmlFor="nuevo_nombre" className="label-formulario">
                        Nuevo nombre:
                    </label>
                    <br />
                    <input
                        type="text"
                        id="nuevo_nombre"
                        name="nuevo_nombre"
                        className="form-control"
                        value={formData.nuevo_nombre}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Precio set */}
                <div className="mb-3">
                    <label htmlFor="precio_set" className="label-formulario">
                        Precio set:
                    </label>
                    <br />
                    <input
                        type="number"
                        id="precio_set"
                        name="precio_set"
                        className="form-control"
                        value={formData.precio_set}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Precio retoque */}
                <div className="mb-3">
                    <label htmlFor="precio_retoque" className="label-formulario">
                        Precio retoque:
                    </label>
                    <br />
                    <input
                        type="number"
                        id="precio_retoque"
                        name="precio_retoque"
                        className="form-control"
                        value={formData.precio_retoque}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Botones */}
                <div className="d-grid gap-2 mb-2">
                    <button
                        className="btn btn-restablecer"
                        type="button"
                        id="btn-restablecer"
                        onClick={handleReset}
                    >
                        Restablecer
                    </button>
                    <button
                        className="btn btn-confirmar"
                        type="submit"
                        id="btn-confirmar"
                    >
                        Confirmar
                    </button>
                    <button
                        className="btn btn-primary fw-bold"
                        type="button"
                        onClick={() => navigate("/admin/servicios_listado")}
                    >
                        Volver
                    </button>
                </div>
            </form>
        </div>
    );
}
