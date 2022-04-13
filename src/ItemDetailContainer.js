import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc} from "../firebase/firestore";
import ItemDetail from "./componentes/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "productos", itemId)
        getDoc (docRef)
        .then(doc => {
           const prod ={id: doc.id, ...doc.data()}
           setItem({id: doc.id, ...doc.data()} )
        })
        .finally(() => {
            setLoading(false)
        })
            
        
    }, [itemId])

    return(
        <div>
            {
                loading
                ? <h2>CARGANDO...</h2>
                : <ItemDetail {...item}/>
            }
        </div>
    )
}
export default ItemDetailContainer;