import { useState, useEffect } from "react"
import { getProductos } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"


function ItemListContainer({ greeting }){
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        getProductos()
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    

    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer