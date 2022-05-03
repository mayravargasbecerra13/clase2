
import { useReducer, useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ItemListReduce } from "../redeucer/ItemListReducer";
import { Navigate } from "react-router-dom";
import { Link } from "react-bootstrap-icons";
import { shoppingInitialState } from "../redeucer/ItemListReducer";




const Checkout = () => {
    const [state, dispatch] = useReducer(ItemListReduce, shoppingInitialState);

  const { productos, cart } = state;
 console.log(cart)
  //  const {cart, cartTotal, emptycart} = useContext(ItemListReduce)
    

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
          nombre: '',
          direccion: '',
          tel: '',
          ciudad: ''

        })
   
    const handleImputChage = (e) => {
    
     console.log(values)
    
      setValues({
          ...values,
          [e.target.name]: e.target.value

      })

    }    

    const handleSubmit = (e) => {
        e.preventDefault()
          


    const orden = {
      //  item: cart,
       // total: cartTotal(),
        comprador: {...values},
        fyh: Timestamp.fromDate(new Date())
        
    }

    console.log(orden)

    const ordersRef = collection(db, 'orders')

    addDoc(ordersRef, orden)
    .then((doc) => {
        console.log(doc.id)
        setOrderId(doc.id)
      //  emptycart()
    })
     
    }
    if (orderId){
        return <div>
            <h2>Tu pedido se registró exitosamente</h2>
            <hr/>
            <h3>Guarda tu numero de orden: (orderId)</h3>
            <Link to="/">volver al inicio</Link>
        </div>
    }

    //if (cart.length === 0){
      //  return <Navigate to="/"/>
    //}
    return (
        <div className="check">
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input className="form"
                 type={'text'}
                 placeholder = "Nombre"
                 value={values.nombre}
                 name='nombre'
                 onChange={handleImputChage}
                 />
                
                <input className="form"
                 type={'text'} 
                placeholder = "Dirrección"
                value={values.direccion}
                name='direccion'
                onChange={handleImputChage}
                />
                <input className="form" 
                type={'namber'}
                 placeholder = "Telefono"
                 value={values.tel}
                 name='tel'
                 onChange={handleImputChage}
                 
                 />
                <input className="form" 
                type={'text'} 
                placeholder = "Ciudad"
                value={values.ciudad}
                name='ciudad'
                 onChange={handleImputChage}
                />
                <button>Enviar</button>
                
            </form>
        </div>
    )
}

export default Checkout;