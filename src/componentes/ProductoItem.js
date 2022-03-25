const ProductosItem = ({data,addToCart}) => {
    let {id, nombre, precio, color, codigo, } = data;
    return (
        <div style={{border:"thin solid gray", padding:"1rem"}}>
             <h4>{nombre}</h4>
            <h5>${precio}.000</h5>
            <h6>{color}</h6>
            <h6>{codigo}</h6>
            
            <button onClick={()=> addToCart(id)}>Agregar</button>
        </div>
    )
}
export default ProductosItem