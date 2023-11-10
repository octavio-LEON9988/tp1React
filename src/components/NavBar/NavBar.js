import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

function navBar(){
    return (
        <nav className="NavBarStyle">
            <h3 className="Titulo">Digital Store</h3>
            <div className="ButtonsContainer">
                <button className="Paginas">Productos</button>
                <button className="Paginas">Ofertas</button>
                <button className="Paginas">Sobre Nosotros</button>
                <button className="Paginas">Envios</button>
                <button className="Paginas">Ususario</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default navBar