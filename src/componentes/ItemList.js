import { useReducer } from "react";
import { shoppingInitialState, ItemListReducer } from "../redeucer/ItemListReducer";
import ProductosItem from "./ProductoItem";

const ItemList = () => {
    const [state, dispatch] = useReducer(ItemListReducer, shoppingInitialState);
    const{productos, cart} = state;
    const addToCart = (id) => {
        console.log(id);
    };

    const delFromCart = () => {};

    const clearCart = () => {};
  return(
      <div>
         <h2>Carrito de compras</h2>
          <h3>Productos</h3>
          <div className="box grid-responsive">
              {productos.map((productos) =>( <ProductosItem key={productos.id} data={productos} addToCart={addToCart}/>))}
          </div>
          <h3>Carrito</h3>
          <div className="box"></div>
     </div>
     
  )
}

export default ItemList;