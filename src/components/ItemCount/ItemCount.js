import {useState} from "react"
import "./ItemCount.css"


const ItemCount = ({stock, initial, onAdd})=> {
    const [cantidad, setCantidad] = useState(initial)

    const sumar = () =>{
        if(cantidad < stock) {
            setCantidad(cantidad+1)
        }
    }

    const restar = () =>{
        if(cantidad > 1){
            setCantidad(cantidad-1)
        }
    }

    return (
        <div className="buttonContainer">
                <button onClick={sumar}>+</button>
                
                <button onClick={restar}>-</button>
                <button onClick={()=> onAdd(cantidad)}>Agregar al carrito</button>
                <h4>{cantidad}</h4>
        </div>
    )
}

export default ItemCount