import { useEffect, useState } from "react"
import { ItemList } from "./ItemList"
import { useParams } from 'react-router-dom'
import { db } from "../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"

 
export const ItemListContainer = ({category,}) => {

    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect( () => {
        
        const productosRef = collection(db, 'productos')

        const q = productosRef
      
        getDocs(q)
            .then((resp) => {
                setProductos( resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    const productSelected = category ? productos.filter(item => item.category === category) : productos
    
    return (
        <>
            {
                loading 
                    ? <h2>Loading...</h2> 
                    : <ItemList categoryWithProducts={productSelected}/>
            } 
        </>
    )
}
export default ItemListContainer;
