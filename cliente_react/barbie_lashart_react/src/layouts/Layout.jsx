import { Outlet } from 'react-router-dom'
import NavBar from '../components/navbar'

export default function Layout(){
    return(
        <>
            {/* NAV BAR */}

            <NavBar/>

            {/* CONTENIDO PRINCIPAL */}
            <main className="container-fluid" >
                <Outlet/>
            </main>
        </>
    )
}