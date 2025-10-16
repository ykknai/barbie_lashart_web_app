import { createBrowserRouter } from 'react-router-dom';
import RutaPrivada from './components/RutaPrivada';
import Inicio from './views/usuarios/Inicio';
import Servicios from './views/usuarios/Servicios';
import Contacto from './views/usuarios/Contacto';
import Login from './views/Login';
import Galeria from './views/usuarios/Galeria';
import CitasListado from './views/administradores/citas/CitasListado';
import CitasEditar from './views/administradores/citas/CitasEditar';
import CitasMensaje from './views/administradores/citas/CitasMensaje';
import CrearServicio from './views/administradores/servicios/ServicioCrear';
import UsuarioLayout from './layouts/UsuarioLayout';
import AdminLayout from './layouts/AdminLayout';
import ServicioListado from './views/administradores/servicios/ServicioListado';
import ServicioEditar from './views/administradores/servicios/ServicioEditar';
import Signin from './views/Signin';
import EditarInformacion from './views/usuarios/Editar';
import EditarInformacionAdmin from './views/administradores/EditarInformacion';

export const router = createBrowserRouter([
    {
        path:'/admin',
        element:(
            <RutaPrivada rolNecesario="A">
                <AdminLayout />
            </RutaPrivada>
        ),
        children: [
            {
                path: 'servicios_listado',
                element: <ServicioListado />
            },
            {
                path: 'servicios_editar/:id',
                element: <ServicioEditar />
            },
            {
                path:'citas_listado',
                element:<CitasListado/>
            },
            {
                path:'citas_editar',
                element:<CitasEditar/>
            },
            {
                path:'citas_mensaje',
                element:<CitasMensaje/>
            },
            {
                path:'crear_servicio',
                element:<CrearServicio/>
            },
            {
                path:'servicios_listado',
                element:<ServicioListado/>
            },
            {
                path:'servicios_editar/:id',
                element:<ServicioEditar/>
            },
            {
                path: 'editar_informacion/admin',
                element: <EditarInformacionAdmin />
            }
        ]
    },
    {
        path:'/',
        element: <UsuarioLayout/>,
        children:[
            {
                index: true,
                element: <Inicio/>,
            },
            {
                path:'servicios',
                element: <Servicios/>
            },
            {
                path:'galeria',
                element: <Galeria/>
            },
            {
                path:'contacto',
                element:<Contacto/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'signin',
                element: <Signin />
            },
            {
                path:'editar_informacion',
                element: <EditarInformacion />
            }
        ]
    }
])