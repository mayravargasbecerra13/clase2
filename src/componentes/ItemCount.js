//HOOKS
import React, {useState} from 'react';

export default function FunctionalComponent () {
let [ contador, setcontador ] = useState (0)

let click = (tipo) => {
    if(tipo ==='sumar'){
        setcontador(contador + 1);
    }else {
        setcontador(contador - 1);
    }
};
 return(

        <div >
           <div>
               Número de veces click: {contador}
           </div>
         
           <button onClick={() => click('sumar')}>Agregar</button>
           <button onClick={() => click('restar')}>Disminuir</button>
        </div>
    )
}




 