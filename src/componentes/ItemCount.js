import { useReducer } from "react";
import { TYPES } from "../accion/contadorActions";
import { contadorinit, contadorinitialState, contadorreducers } from "../redeucer/contadorreducers";



const Contador = () => {
    //const[Contador, setContador] = useState(0);
    const [state, dispatch] = useReducer(contadorreducers, contadorinitialState, contadorinit);

//const sumar =() =>  setContador(contador + 1)
    const sumar = () => dispatch({type:TYPES.INCREMENT});
    const sumar5 = () => dispatch({types: TYPES.INCREMENT_5, payload: 5})


    //const restar =() =>  setContador(contador - 1)
    const restar = () => dispatch({type:TYPES.DECREMENT});
    const restar5 = () => dispatch({types: TYPES.DECREMENT_5, payload: 5})

    const reset = () => dispatch({types: TYPES.RESET})

    return (
        <div style={{textAlign:"center"}}>
            <h2>Contador</h2>
            <nav>
                <button onClick={sumar5}>+5</button>
                <button onClick={sumar}>+</button> 
                <button onClick={reset}>0</button>
                <button onClick={restar}>-</button>
                <button onClick={restar5}>-5</button>
                <h3>{state.Contador}</h3>
            </nav>
        </div>
    )
}

export default Contador;




  