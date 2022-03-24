import {TYPES} from "../accion/ItemListAction";

export const shoppingInitialState = {
  productos: [
      {id:1, nombre: "Jean", precio: 70.000, codigo: 102030},
      {id:2, nombre: "Chaqueta", precio: 90.000, codigo: 104050},
      {id:3, nombre: "Vestido ", precio: 65.000, codigo: 106070},
      {id:4, nombre: "Chaleco ", precio: 80.000, codigo: 108090},
      {id:5, nombre: "Sudadera", precio: 110.000, codigo: 101001},
      {id:6, nombre: "Abrigo", precio: 100.000, codigo: 101002},
      {id:7, nombre: "Zapatillas", precio: 170.000, codigo: 101003},
      {id:8, nombre: "Blusa",precio: 65.000, codigo: 101004},
      {id:9, nombre: "Crop tops", precio: 50.000, codigo: 101005},
      {id:10, nombre: "Gabanes", precio: 130.000, codigo: 101006},
      {id:11, nombre: "Camisa", precio: 45.000, codigo: 101007},
      {id:12, nombre: "Enterizo", precio: 70.000, codigo: 101008},
  ],
  cart:[],
};

export function ItemListReducer(state, accion){
   switch(accion.type){
       case TYPES.ADD_TO_CART:{

       }
       case TYPES.REMOVE_ONE_FROM_CART:{
           
    }
    case TYPES.REMOVE_ALL_FROM_CART:{
           
    }
    case TYPES.CLEAR_CART:{
           
    }
    default:
        return state;
   }
}