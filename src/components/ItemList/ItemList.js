import Item from "../Item/Item"
import "./ItemList.css"


function ItemList({productos}){
    return (
        <div className="ListGroup">
            {productos.map(producto => <Item key={producto.id} {...producto}/>)}
        </div>
    )
}

export default ItemList