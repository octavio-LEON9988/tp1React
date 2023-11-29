import {Link} from "react-router-dom"

import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

function NavBar(){
    return (
        <nav className="NavBarStyle">
            <Link to="/"><h3 className="Titulo">Digital Store</h3></Link>
            <div className="ButtonsContainer">
                <button className="Paginas"><Link to="productos">Productos</Link></button>
                <button className="Paginas"><Link to="ofertas">Ofertas</Link></button>
                <button className="Paginas"><Link to="sobre_nosotros">Sobre Nosotros</Link></button>
                <button className="Paginas"><Link to="envios">Envios</Link></button>
                <button className="Paginas"><Link to="usuario">Ususario</Link></button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar