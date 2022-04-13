import { collection, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase/config"
import ItemList from "./ItemList"

 const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect( () =>{
        setLoading(true)
        const productosRef =  collection (db, "productos")
        getDoc(productosRef)
        .then (resp => {
            const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            console.log(items)
            setProductos(items)
        })
       .finally(() => {
           setLoading(false)
       })
    },)

    return (
        <>
        {
            loading
            ?<h2>loading...</h2>
            : <ItemList productos={productos}/>
        }
        
        </>
    )
    
}
export default ItemListContainer;
