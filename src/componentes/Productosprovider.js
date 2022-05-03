import { Children, useReducer, useState } from "react";
import { shoppingInitialState, ItemListReduce } from "../redeucer/ItemListReducer";


const Productosprovider = ({children}) => {
    const [state, dispatch] = useReducer(ItemListReduce, shoppingInitialState);

  const { productos, cart } = state;
    return children
    
}

export default Productosprovider;