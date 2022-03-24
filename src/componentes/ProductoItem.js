const ProductosItem = ({data,addToCart}) => {
    let {id, nombre, precio} = data;
    return (
        <div style={{border:"thin solid gray", padding:"1rem"}}>
            <h4>{nombre}</h4>
            <h5>${precio}.000</h5>
            <button onClick={()=> addToCart(id)}>Agregar</button>
        </div>
    )
}
export default ProductosItem