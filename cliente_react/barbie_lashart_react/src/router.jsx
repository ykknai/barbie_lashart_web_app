import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/layout';
import Inicio from './views/usuarios/Inicio';
import Servicios from './views/usuarios/Servicios';
import Contacto from './views/usuarios/Contacto';
import Login from './views/Login';
import Galeria from './views/usuarios/Galeria';
import CitasListado from './views/administradores/CitasListado';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
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
                path:'citas_listado',
                element:<CitasListado/>
            }
        ]
    }
])