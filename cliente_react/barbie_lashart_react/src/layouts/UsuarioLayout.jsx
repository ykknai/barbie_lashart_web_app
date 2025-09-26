import { Outlet } from 'react-router-dom'
import UsuariosNavBar from '../components/UsuariosNavbar'

export default function UsuarioLayout(){
    return(
        <>
            {/* NAV BAR */}

            <UsuariosNavBar/>

            {/* CONTENIDO PRINCIPAL */}
            <main className="container-fluid" >
                <Outlet/>
            </main>
        </>
    )
}