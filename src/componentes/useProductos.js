import { useState, useEffect } from "react"
import { pedirDatos } from '../helpers/pedirDatos'
import { db } from "../firebase/config"




export const useProductos = (categoryId) => {

    const text = db()
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    
    

    useEffect( () => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if (categoryId) {
                    setProductos( res.filter((el) => el.categoria === categoryId ) )
                } else {
                    setProductos(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
               setLoading(false)
            })

    }, [categoryId])

    return {productos, loading}
}
export default useProductos;