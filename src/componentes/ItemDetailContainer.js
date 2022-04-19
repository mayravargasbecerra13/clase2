import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../componentes/ItemDetail';

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        
        const docRef = doc(db, "productos", itemId)
        
        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(()=> {
                setLoading(false)
            })
    }, [])


    return (
        <div >
            {
                loading 
                ? <h2>Cargando...</h2>
                : <ItemDetail {...item}/>
            }
        </div>
    )
};
export default ItemDetailContainer;