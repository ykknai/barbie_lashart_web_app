import { Form } from "react-router-dom";

export default function Login() {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center align-items-center vh-100">
        <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4">
          {/* <!-- CARD --> */}
          <div className="card shadow-lg rounded-4">
            <div className="card-body">
              {/* <!-- IMAGEN --> */}
              <div className=" text-center mb-4 ">
                <img
                  src="../../public/images/logo_bl_png.png"
                  alt="Logo Empresa"
                  className="img-fluid"
                  style={{ maxWidth: "250px" }}
                />
                <h4 className="mt-2">Iniciar sesión</h4>
              </div>
              {/* ERROR MESSAGE */}
              {/* <!-- FORMULARIO --> */}
              <Form>
                {/* <!-- EMAIL --> */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                {/* <!-- PASSWORD --> */}
                <div className="mb-3">
                  <label htmlFor="contraseña" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="contraseña"
                    placeholder="*******"
                  />
                </div>
                {/* <!-- ENTRAR --> */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-lg rounded-pill"
                    id="btn-login"
                    href="/"
                  >
                    Entrar
                  </button>
                </div>
                {/* <!-- CREAR CUENTA --> */}
                <div className="text-center ms-2 mt-3">
                  <a
                    href="/admin/citas_listado"
                    className="text-decoration-none"
                  >
                    Crear Cuenta
                  </a>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}