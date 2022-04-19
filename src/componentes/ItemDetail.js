import {  useState } from "react";
import Select from "./Select";

const options = [
    {value: 'L', text: 'Large'},
    {value: 'M', text: 'Medium'},
    {value: 'S', text: 'Small'},
]


const ItemDetail = ({data,addToCart}) => {


    
    const [talla, setColor] = useState('L')
    
    let {id, nombre, img, precio, color, codigo, category} = data;

  

    return (
        <div style={{border:"thin solid gray", padding:"1rem"}}>
             <h4>{nombre}</h4>
             <img className="imagencart" src={img} alt={nombre}/>
            <h5>${precio}.000</h5>
            <h6>{color}</h6>
            <h6>{codigo}</h6>
            <p>{category}</p>
           
         <Select
         options ={options}
         onSelect = {setColor}
         />
      
            
            <button className="agregar" onClick={()=> addToCart(id)}>Agregar al carrito</button>
        </div>
        
    )
}
export default ItemDetail