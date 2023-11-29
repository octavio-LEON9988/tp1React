import { useState, useEffect, useParams } from "react";
import { getProductosById } from "../../asyncMock";
import ItemDetail from "";

const ItemDetailContainer = () => {
    const [producto, setProductos] = useState(null)

    const {itemId} = useParams()

    useEffect(()=>{
        getProductosById(itemId)
            .then(respone => {
                setProductos(respone)
            })
            .catch(error => {
                console.log(error)
            })
    },[itemId])

    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer