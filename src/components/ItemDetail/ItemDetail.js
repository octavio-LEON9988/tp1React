//import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

function ItemDetail({id, nombre, img, precio, stock}){

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
                <ItemCount initial={1} stock={stock} onAdd={(cantidad)=> console.log("se agregó", cantidad)}/>
            </footer>
        </article>
        
    )
}

export default ItemDetail