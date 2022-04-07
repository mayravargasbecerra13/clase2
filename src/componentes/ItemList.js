import {  useReducer } from "react";
import { shoppingInitialState, ItemListReducer } from "../redeucer/ItemListReducer";
import ItemDetail from "./ItemDetail";
import { TYPES } from "../accion/ItemListAction";
import CartItem from "../componentes/CartItem"



export const ItemList = () => {
    
    

    const [state, dispatch] = useReducer(ItemListReducer, shoppingInitialState);
    const{productos, cart} = state;
    const addToCart = (id) => {
        //console.log(id);
        dispatch({type:TYPES.ADD_TO_CART,payload:id})
    };

    const delFromCart = () => {};

    const clearCart = () => {
        dispatch({type: TYPES.CLEAR_CART})
    };
    
    
  
  return(
      <div>
         <h2>Carrito de compras</h2>
          <h3>Productos</h3>
          <div className="box grid-responsive">
              {productos.map((productos) =>(<ItemDetail key={productos.id} data={productos} addToCart={addToCart}/>))}
          </div>
          
          <div className="box">
              <button onClick={clearCart}>Limpiar carrito</button>
              {
                  cart.map((item, index) => <CartItem  key = {index}data={item} delFromCart={delFromCart}/>)
              }
          </div>
     </div>
     
  )
}

export default ItemList;