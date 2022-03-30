 const CartItem = ({data, delFromCart}) => {
     let {id, nombre, img, precio, color, codigo,  quantity} = data;
    return(
        <div>
            <h4>{nombre}</h4>
            <img className="imagencart" src={img} alt={nombre}/>
            <h5>${precio}.000 x {quantity} = ${precio*quantity}</h5>
            <h6>{color}</h6>
            <h6>{codigo}</h6>
            <button>Eliminar uno</button>
            <button>Eliminar todos</button>
        </div>
    )
}

export default CartItem;