import { useEffect, useState } from "react"
import { ItemList } from "./ItemList"
import { useParams } from 'react-router-dom'
import { db } from "../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"

 
export const ItemListContainer = () => {

    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    useEffect( () => {
        setLoading(true)

        
        const productosRef = collection(db, 'productos')
        const q = categoryId ? query(productosRef, where("category", "==", categoryId)) : productosRef
      
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


    return (
        <>
            {
                loading 
                    ? <h2>Loading...</h2> 
                    : <ItemList productos={productos}/>
            } 
        </>
    )
}
export default ItemListContainer;
