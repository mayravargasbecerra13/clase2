 const CartItem = ({data, delFromCart}) => {
     let {id, nombre, precio, color, codigo, quantity} = data;
    return(
        <div>
            <h4>{nombre}</h4>
            <h5>${precio}.000 x {quantity} = ${precio*quantity}</h5>
            <h6>{color}</h6>
            <h6>{codigo}</h6>
            <button>Eliminar uno</button>
            <button>Eliminar todos</button>
        </div>
    )
}

export default CartItem;