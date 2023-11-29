import "./Item.css"
import ItemCount from "../ItemCount/ItemCount"
//import ItemDetail from "../ItemDetail/ItemDetail"
import {Link} from "react-router-dom"


function Item({id, nombre, img, precio, stock}){

    return (
        <article className="card">
            <header className="itemHeader">
                <h2 className="itemTittle">{nombre}</h2>
            </header>

            <picture>
                <img src={img} alt={nombre} className="itemImg"/>
            </picture>

            <section>
                <p className="info">
                    Precio: ${precio}
                </p>
                <p className="info">
                    Stock disponible: {stock}
                </p>
            </section>

            <footer className="itemFooter">
                <button><Link to={`/item/${id}`}>Ver detalles</Link></button>
                <ItemCount initial={1} stock={stock} onAdd={(cantidad)=> console.log("se agregó", cantidad)}/>
            </footer>
        </article>
    )
}

export default Item

/*<button>Agregar al carrito</button>
                <h4>{cantidad}</h4>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>*/ 