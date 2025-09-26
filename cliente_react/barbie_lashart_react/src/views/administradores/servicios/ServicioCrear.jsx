import { useState } from "react";
import { crearServicio } from "../../../services/servicioService";

export default function CrearServicio() {
    const [formData, setFormData] = useState({
        nom_servicio: "",
        precio_set: "",
        precio_retoque: "",
    });

    const [errores, setErrores] = useState({});
    const [mensaje, setMensaje] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensaje("");
        setErrores({});

        const result = await crearServicio(formData);

        if (result.success) {
            setMensaje("Servicio creado correctamente");
            setFormData({
                nom_servicio: "",
                precio_set: "",
                precio_retoque: "",
            });
        } else {
            setMensaje(result.error || "Error al enviar el formulario.");
            if (result.dicErrores) {
                setErrores(result.dicErrores);
            }
        }
    };

    const handleReset = () => {
        setFormData({
            nom_servicio: "",
            precio_set: "",
            precio_retoque: "",
        });
        setErrores({});
        setMensaje("");
    };

    return (
        <div id="citas_mensaje">
            <div id="inicio">
                <h1>Agrega un nuevo Servicio</h1>
                <p>
                    Agrega un servicio <span className="span-form">según lo necesites</span>
                </p>
            </div>

            {mensaje && <div className="alert alert-info">{mensaje}</div>}

            <form id="formulario_cita" onSubmit={handleSubmit}>
                {/* Nombre Servicio */}
                <div className="mb-2">
                    <label htmlFor="nom_servicio" className="label-formulario">
                        Nombre Servicio:
                    </label>
                    <br />
                    <input
                        type="text"
                        id="nom_servicio"
                        name="nom_servicio"
                        placeholder="Ej: Extensiones"
                        className={`form-control ${errores.nom_servicio ? "is-invalid" : ""}`}
                        value={formData.nom_servicio}
                        onChange={handleChange}
                    />
                    {errores.nom_servicio &&
                        errores.nom_servicio.map((err, i) => (
                            <div key={i} className="invalid-feedback">{err}</div>
                        ))}
                </div>

                {/* Precio Servicio set */}
                <div className="mb-2">
                    <label htmlFor="precio_set" className="label-formulario">
                        Precio set $:
                    </label>
                    <br />
                    <input
                        type="text"
                        id="precio_set"
                        name="precio_set"
                        placeholder="Ej: 12000"
                        className={`form-control ${errores.precio_set ? "is-invalid" : ""}`}
                        value={formData.precio_set}
                        onChange={handleChange}
                    />
                    {errores.precio_set &&
                        errores.precio_set.map((err, i) => (
                            <div key={i} className="invalid-feedback">{err}</div>
                        ))}
                </div>

                {/* Precio Servicio retoque */}
                <div className="mb-3">
                    <label htmlFor="precio_retoque" className="label-formulario">
                        Precio retoque $:
                    </label>
                    <br />
                    <input
                        type="text"
                        id="precio_retoque"
                        name="precio_retoque"
                        placeholder="Ej: 15000"
                        className={`form-control ${errores.precio_retoque ? "is-invalid" : ""}`}
                        value={formData.precio_retoque}
                        onChange={handleChange}
                    />
                    {errores.precio_retoque &&
                        errores.precio_retoque.map((err, i) => (
                            <div key={i} className="invalid-feedback">{err}</div>
                        ))}
                </div>

                {/* Botones */}
                <div className="d-grid gap-2">
                    <button
                        className="btn btn-restablecer"
                        type="button"
                        onClick={handleReset}
                    >
                        Restablecer
                    </button>
                    <button className="btn btn-confirmar" type="submit">
                        Confirmar
                    </button>
                    <a className="btn btn-primary fw-bold" href="citas_listado">
                        Volver
                    </a>
                </div>
            </form>
        </div>
    );
}
