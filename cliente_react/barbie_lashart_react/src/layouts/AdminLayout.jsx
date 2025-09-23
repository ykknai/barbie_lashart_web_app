import { Outlet } from 'react-router-dom'
import AdminsNavBar from '../components/AdminsNavbar'

export default function AdminLayout(){
    return(
        <>
            {/* NAV BAR */}

            <AdminsNavBar/>

            {/* CONTENIDO PRINCIPAL */}
            <main className="container-fluid" >
                <Outlet/>
            </main>
        </>
    )
}