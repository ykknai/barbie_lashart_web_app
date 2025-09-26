import imagenes from "../../assets/data_images";

export default function Inicio() {
    return (
        <div className="container-fluid py-5" id="inicio">
            <div className="row align-items-center">
                <div className="col-xl-6 col-md-12 text-center">
                    <h1 className="display-5 fw-bold">
                        Realza tu <span className="inicio-span">Mirada Perfecta</span>
                    </h1>
                    <p className="lead mt-4">
                        Transforma tu belleza y<br />
                        dale ese toque de magia que se merecen<br />
                        tus pestañas.
                    </p>
                    <div className="mt-4">
                        <a href="servicios" className="btn me-3" id="btn-login">VER SERVICIOS</a>
                        <a href="contacto" className="btn" id="btn-login">CONTÁCTANOS</a>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12 mt-md-5" id="cuadro-imagenes">
                    <section className="image-gallery">
                        {imagenes.map((img, index) => (
                            <img
                                key={index}
                                src={`/images/${img.imagen}`}
                                alt={`Imagen ${index + 1}`}
                                className="rounded shadow"
                            />
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
}
