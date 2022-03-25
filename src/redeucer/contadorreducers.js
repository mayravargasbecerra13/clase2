import { TYPES } from "../accion/contadorActions";

export const contadorinitialState= {Contador: 0};

export const contadorinit = (initialState) =>{
    return{
        Contador:initialState.Contador + 100,
        }
}

export function contadorreducers(state, action){
    switch(action.type){
        case TYPES.INCREMENT:
            return{Contador:state.Contador + 1};
            case TYPES.INCREMENT_5:
                return {Contador:state.Contador + action.payload};
            case TYPES.DECREMENT:
                return {Contador:state.Contador - 1};
                case TYPES.DECREMENT_5:
            return {Contador:state.Contador - action.payload}
            case TYPES.RESET:
                return contadorinitialState;
        default:
       return state;
    }
   }